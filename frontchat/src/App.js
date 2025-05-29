import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Certificates from "./pages/Certificates/Certificates";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/certifications" element={<Certificates/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
