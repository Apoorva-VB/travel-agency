import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChooseUs from "./Components/ChooseUs";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import PopularDestinations from "./Components/PopularDestinations";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
import Contact from "./Components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <ChooseUs />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
