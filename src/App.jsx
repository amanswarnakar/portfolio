import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="App">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="container">
        {/* <Routes>
            <Route path="/" exact index element={<Home />} />
            <Route path="/home" exact index element={<Home />} />
            <Route path="/about" exact index element={<About />} />
            <Route path="/xp" exact index element={<Experiences />} />
            <Route path="/edu" exact index element={<Education />} />
            <Route path="/contact" exact index element={<Contact />} />
          </Routes> */}
        <Home setSelected={setSelected} />
        <About />
        <Experiences />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
