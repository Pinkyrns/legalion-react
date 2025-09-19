// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import Excelence from "./pages/Excelence/Excelence";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    
      <AnimatePresence>
        {loading ? (
          <Loading />
        ) : (
          <div className="App">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/excelence" element={<Excelence />} />
              <Route path="/team" element={<Team />} />
            </Routes>

            <Footer></Footer>
          </div>
        )}
      </AnimatePresence>
    
  );
}

export default App;
