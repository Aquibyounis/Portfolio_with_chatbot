from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = FastAPI()

# Allow CORS for all domains (you can restrict this in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the model and tokenizer
model_name = "tiiuae/falcon-rw-1b"  # or any other model you use
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# 🔧 Fix: Set pad token if missing
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

# Track conversation history
chat_history = []

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    global chat_history
    user_message = request.message.strip()

    # Update chat history
    chat_history.append(f"User: {user_message}")

    # Create prompt with history
    prompt = "\n".join(chat_history[-5:]) + "\nPeanut:"

    # Tokenize input with proper padding and truncation
    inputs = tokenizer(prompt, return_tensors="pt", padding=True, truncation=True)

    # Generate model output
    output = model.generate(
        **inputs,
        max_new_tokens=100,
        temperature=0.7,
        do_sample=True,
        top_k=50,
        top_p=0.9,
        pad_token_id=tokenizer.pad_token_id,
        eos_token_id=tokenizer.eos_token_id
    )

    # Decode generated text
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

    # Extract the response portion only (remove prompt part)
    response = generated_text.split("Peanut:")[-1].strip().split("User:")[0].strip()

    # Add model's response to history
    chat_history.append(f"Peanut: {response}")

    return {
        "response": response,
        "history": chat_history[-10:]  # return last 10 lines
    }
