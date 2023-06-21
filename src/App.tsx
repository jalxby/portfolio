import React from "react";
import "src/scss/App.scss";
import { Fade } from "react-awesome-reveal";
import { Contact } from "./features/contact/Contact";
import { Footer } from "./features/footer/Footer";
import { Header } from "./features/header/Header";
import { Hiring } from "./features/hiring/Hiring";
import { Main } from "./features/main/Main";
import { Projects } from "./features/projects/Projects";
import { Skills } from "./features/skills/Skills";

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
