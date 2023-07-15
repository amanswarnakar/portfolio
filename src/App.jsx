import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import CustomCursor from "./components/CustomCursor/CustomCursor.jsx";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll(".sidebar ul a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        console.log(id);
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        let curr = document.getElementById(id);
        curr.classList.add("active");
      }
    });
  };

  return (
    <div className="App">
      <Sidebar />
      {/* <CustomCursor /> */}
      <div className="container">
        <Home />
        <About />
        <Experiences />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
