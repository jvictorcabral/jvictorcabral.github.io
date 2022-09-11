import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = () => {


  return (
    <div className="App">
      <NavBar />

      <Home />

      <AboutMe />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
