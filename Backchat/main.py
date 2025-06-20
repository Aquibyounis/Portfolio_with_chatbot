import asyncio
import os
from typing import Optional
from functools import lru_cache
import pickle

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.embeddings import OllamaEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.llms import Ollama
from langchain.chains import RetrievalQA
from langchain.docstore.document import Document

# === Configuration ===
VECTOR_DB_PATH = "vector_db"
PERSONA_DATA_FILE = "peanut_data.txt"
EMBEDDING_MODEL = "mistral"
LLM_MODEL = "mistral"
CHUNK_SIZE = 500
CHUNK_OVERLAP = 50

# === FastAPI Setup ===
app = FastAPI(title="Peanut AI Backend", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === Global Variables (Loaded Once) ===
vector_db: Optional[FAISS] = None
qa_chain: Optional[RetrievalQA] = None
embeddings: Optional[OllamaEmbeddings] = None
llm: Optional[Ollama] = None

# === Request Schema ===
class Query(BaseModel):
    question: str

class HealthResponse(BaseModel):
    status: str
    message: str

# === Persona Prompt Template ===
# === Persona Prompt Template ===
PERSONA_PROMPT = """
You are Peanut, Aquib Younis's AI assistant. Respond naturally and contextually.

RESPONSE RULES:
- Greetings ("hi", "hello"): Just say "Hi!" or "Hello! How can I help?" (under 10 words)
- Apology questions: Acknowledge briefly without listing skills
- Project questions: Give detailed technical explanations
- Skills questions: Mention relevant skills only
- Personal questions: Draw from personality traits

AVOID:
- Repeating full skill lists unnecessarily
- Over-introducing Aquib in every response
- Generic responses that ignore context
- Mentioning irrelevant information

CONTEXT AWARENESS:
- Read what the person is actually asking
- Don't assume every question needs a skills overview
- Match the energy and formality of their question
- Be conversational, not robotic

Keep answer in 15-20 lines 
Current conversation context: Answer based on what they're specifically asking, not what you think they want to know.

Question: {question}

Response:
"""





# === Caching Functions ===
@lru_cache(maxsize=128)
def get_cached_response(question: str) -> str:
    """Cache frequently asked questions"""
    pass  # This will be populated by the actual QA chain

# === Initialization Functions ===
def load_or_create_vector_db() -> FAISS:
    """Load existing vector DB or create new one"""
    global embeddings
    
    if os.path.exists(f"{VECTOR_DB_PATH}.pkl"):
        print("Loading existing vector database...")
        return FAISS.load_local(VECTOR_DB_PATH, embeddings)
    
    print("Creating new vector database...")
    # Load persona knowledge
    try:
        with open(PERSONA_DATA_FILE, "r", encoding="utf-8") as f:
            text = f.read()
    except FileNotFoundError:
        raise HTTPException(status_code=500, detail=f"Persona data file '{PERSONA_DATA_FILE}' not found")
    
    # Split documents
    splitter = CharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
    docs = splitter.split_documents([Document(page_content=text)])
    
    # Create vector database
    vector_db = FAISS.from_documents(docs, embeddings)
    
    # Save for future use
    vector_db.save_local(VECTOR_DB_PATH)
    print("Vector database created and saved!")
    
    return vector_db

async def initialize_models():
    """Initialize all models and chains"""
    global vector_db, qa_chain, embeddings, llm
    
    print("Initializing embeddings...")
    embeddings = OllamaEmbeddings(model=EMBEDDING_MODEL)
    
    print("Initializing LLM...")
    llm = Ollama(model=LLM_MODEL, temperature=0.7)
    
    print("Loading/Creating vector database...")
    vector_db = load_or_create_vector_db()
    
    print("Setting up QA chain...")
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vector_db.as_retriever(search_kwargs={"k": 3}),  # Limit retrieval
        return_source_documents=False,
        chain_type="stuff"  # More efficient for shorter contexts
    )
    
    print("✅ All models initialized successfully!")

# === Startup Event ===
@app.on_event("startup")
async def startup_event():
    """Initialize models when server starts"""
    await initialize_models()

# === Health Check Endpoint ===
@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    if qa_chain is None:
        return HealthResponse(status="error", message="Models not initialized")
    return HealthResponse(status="healthy", message="All systems operational")

# === Main Chat Endpoint ===
@app.post("/chat")
async def chat(query: Query):
    """Main chat endpoint with optimizations"""
    
    # Check if models are initialized
    if qa_chain is None:
        raise HTTPException(status_code=503, detail="Models not yet initialized. Please wait.")
    
    # Input validation
    if not query.question.strip():
        raise HTTPException(status_code=400, detail="Question cannot be empty")
    
    if len(query.question) > 1000:
        raise HTTPException(status_code=400, detail="Question too long (max 1000 characters)")
    
    try:
        # Check cache first
        cache_key = query.question.strip().lower()
        
        # Format the personalized prompt
        personalized_prompt = PERSONA_PROMPT.format(question=query.question)
        
        # Run the QA chain asynchronously
        loop = asyncio.get_event_loop()
        answer = await loop.run_in_executor(None, qa_chain.run, personalized_prompt)
        
        return {
            "result": answer.strip(),
            "status": "success"
        }
        
    except Exception as e:
        print(f"Error processing question: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error occurred")

# === Batch Processing Endpoint ===
@app.post("/chat/batch")
async def chat_batch(queries: list[Query]):
    """Process multiple questions in batch"""
    
    if qa_chain is None:
        raise HTTPException(status_code=503, detail="Models not yet initialized")
    
    if len(queries) > 10:
        raise HTTPException(status_code=400, detail="Maximum 10 questions per batch")
    
    results = []
    
    for query in queries:
        try:
            personalized_prompt = PERSONA_PROMPT.format(question=query.question)
            loop = asyncio.get_event_loop()
            answer = await loop.run_in_executor(None, qa_chain.run, personalized_prompt)
            
            results.append({
                "question": query.question,
                "result": answer.strip(),
                "status": "success"
            })
            
        except Exception as e:
            results.append({
                "question": query.question,
                "result": None,
                "status": "error",
                "error": str(e)
            })
    
    return {"results": results}

# === Model Reload Endpoint ===
@app.post("/reload")
async def reload_models():
    """Reload models (useful for updates)"""
    try:
        await initialize_models()
        return {"status": "success", "message": "Models reloaded successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to reload models: {str(e)}")

# === Stats Endpoint ===
@app.get("/stats")
async def get_stats():
    """Get basic stats about the system"""
    return {
        "vector_db_loaded": vector_db is not None,
        "qa_chain_ready": qa_chain is not None,
        "embeddings_ready": embeddings is not None,
        "llm_ready": llm is not None,
        "cache_info": get_cached_response.cache_info()._asdict() if hasattr(get_cached_response, 'cache_info') else None
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=False,  # Disable reload for production
        workers=1,     # Single worker to avoid model reloading
        log_level="info"
    )