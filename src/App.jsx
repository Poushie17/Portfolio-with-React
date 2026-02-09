import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Page1 from "./component/page1/Page1";
import About from "./component/about/About";
import Skills from "./component/skills/Skills";
import Contact from "./component/contact/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
