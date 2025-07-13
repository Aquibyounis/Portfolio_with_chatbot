import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Certificates from "./pages/Certificates/Certificates";
import Ai from "./pages/AI/Ai";
import Projects from "./pages/Projects/Projects";
import LiquidLoader from "../src/Components/Load/LiquidLoader";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
