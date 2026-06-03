import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { useState } from "react";
import React from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  return(
    <>
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />
    <Footer activeSection={activeSection} />
    </>
  )
}

export default App;
