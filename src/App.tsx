import React from "react";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Footer from "./parts/footer/Footer";
import Header from "./parts/header/Header";
import "./utlities/basecss.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import ScrolltoTop from "./utlities/ScrolltoTop";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrolltoTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/portfolios' element={<Portfolios />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/portfolios/:id' element={<ProjectDetail />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
