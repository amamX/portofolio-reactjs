import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

function App() {
  return (
    <div>
      <Loading />
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
