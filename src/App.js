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

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <!-- hero section --> */}
        <div className="hero pb-5" id="hero">
          <Header></Header>
          <Description></Description>
        </div>

        {/* <!-- skills section --> */}
        <Skills></Skills>
        {/* <!-- projects section --> */}
        <Projects></Projects>
        {/* <!-- about me section --> */}
        <AboutMe></AboutMe>
        {/* <!-- contact me section --> */}
        <Contact></Contact>
        {/* <!-- footer section --> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
