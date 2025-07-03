# Personal Developer Portfolio with Peanut AI Assistant

This project is a personal portfolio website created using [Create React App](https://github.com/facebook/create-react-app). It showcases my skills, projects, certifications, and includes a custom AI assistant named **Peanut**, built using FastAPI, LangChain, ChromaDB, and the Groq API (Gemma model).

> ⚠️ Note: Peanut is integrated in the UI but is **not yet hosted**, so chat features are currently unavailable until backend deployment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React portfolio in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the React portfolio for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your portfolio is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.

---

## Peanut AI Assistant (Integrated Inside the Portfolio)

Peanut is a persona-based AI assistant trained on my personal and professional data, designed to answer:

- Questions about me, my skills, and experience
- HR-based questions like strengths, weaknesses, goals
- Details about my projects, certifications, and interests

### Built With:

- 🧠 **Groq API** (Gemma model)
- 🧠 **LangChain v0.3+**
- 🔍 **ChromaDB** (for vector storage)
- 💡 **HuggingFace Embeddings**
- 🚀 **FastAPI Backend** (inside `/peanut` folder)

### API Endpoints:

- `/chat`: Chat endpoint using local memory
- `/chat/batch`: Batch Q&A
- `/reload`: Reload the data from file
- `/stats`: Show vector DB stats
- `/health`: Backend health check

> Peanut is not hosted yet, so the chat feature is currently unavailable in production.

---

## Learn More

You can learn more about the technologies used in this portfolio:

- [React documentation](https://reactjs.org/)
- [LangChain Docs](https://docs.langchain.com/)
- [ChromaDB](https://docs.trychroma.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Groq Console](https://console.groq.com/)

---

## Project Deployment

| Component         | Status         |
|------------------|----------------|
| Frontend (React) | ✅ Live         |
| Peanut AI Model  | 🚧 Not yet hosted |
| API Integration  | ✅ UI Connected |

---

## Folder Structure

