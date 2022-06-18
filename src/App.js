import "./App.css";
import profile from "./assets/my_profile.png";

import calculator from "./assets/calculator.png";
import { Header } from "./Components/Header";
import { Description } from "./Components/Description";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
// The following statement is for applying the route.
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Description></Description>}></Route>

            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>

            <Route path="/about" element={<AboutMe></AboutMe>}></Route>

            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </BrowserRouter>
        {/* <!-- hero section --> */}
        {/* <div className="hero pb-5" id="hero">
          <Header></Header>
          <Description></Description>
        </div> */}

        {/* <!-- skills section --> */}
        {/* <Skills></Skills> */}
        {/* <!-- projects section --> */}
        {/* <Projects></Projects> */}
        {/* <!-- about me section --> */}
        {/* <AboutMe></AboutMe> */}
        {/* <!-- contact me section --> */}
        {/* <Contact></Contact> */}
        {/* <!-- footer section --> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
