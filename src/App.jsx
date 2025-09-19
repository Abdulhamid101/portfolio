import React from "react";
import GridBackdrop from "./component/GridBackdrop/GridBackdrop";
import Nav from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";
import Work from "./component/Work/Work";
import About from "./component/About/About";
import Skills from "./component/Skills.jsx/Skills";
import Process from "./component/Process/Process";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
// import "../styles/globals.css";

export default function Portfolio() {
  return (
    <div className="shell">
      <GridBackdrop />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
