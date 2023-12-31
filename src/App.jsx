import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
