import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Customer from "./components/Customer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Customer />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
