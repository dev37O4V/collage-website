import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
