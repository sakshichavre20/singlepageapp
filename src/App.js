import "./styles/App.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/mediaquery.scss";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home ";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
