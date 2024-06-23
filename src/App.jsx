import "./App.css";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import HardScills from "./components/hard-skills/HardScills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container div">
        <About />
        <Work />
      </div>
      <HardScills />
      <Contact />
    </>
  );
}

export default App;
