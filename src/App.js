import "./App.css";

import { Description } from "./Components/Description";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";

// The following statement is for applying the route.
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Description></Description>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/about" element={<AboutMe></AboutMe>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
