import React from "react";
import GridBackdrop from "../components/GridBackdrop/GridBackdrop";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Process from "../components/Process/Process";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css"; // base layout using tokens

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
