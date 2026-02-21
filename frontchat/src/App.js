import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Ai from "./pages/AI/Ai";
import Projects from "./pages/Projects/Projects";
import LiquidLoader from "../src/Components/Load/LiquidLoader";
import Hackathons from "./Components/Hackathons/Hackathons";
import Research from "./Components/Research/Research";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LiquidLoader />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/assistant" element={<Ai />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </BrowserRouter>
      <CustomCursor/>
    </div>
  );
}

export default App;
