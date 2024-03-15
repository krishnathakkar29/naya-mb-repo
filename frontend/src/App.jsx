import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
