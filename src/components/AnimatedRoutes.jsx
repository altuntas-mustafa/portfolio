import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Main from "./Main";
import Projects from "../pages/Projects";
// import Skills from "../pages/Skills";

import { AnimatePresence } from "framer-motion";


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/skills" element={<Skills />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
