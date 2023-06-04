import React from "react";
import "./App.scss";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Hiring } from "./hiring/Hiring";
import { Main } from "./main/Main";
import { Projects } from "./projects/Projects";
import { Skills } from "./skills/Skills";

function App() {
  return (
    <div className="App">
      <div className={"content"}>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Hiring />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
