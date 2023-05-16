import React from "react";
import "./App.scss";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Skills } from "./skills/Skills";
import { Projects } from "./projects/Projects";
import { Hiring } from "./hiring/Hiring";
import { Contact } from "./contacts/Contact";
import { Footer } from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Hiring />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
