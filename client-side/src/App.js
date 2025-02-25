import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/Footer";
import BackToTop from "./Component/BackToTop/index";
import Home from "./Pages/Home/Content";


function App() {
  return (
    // <div className="App container">
    <div>
      <Router>
        <Navbar />
        <Home />
        <div className="mt-5 pt-5">
          {/* <Portofolio />
          <Hire />
          <Contact /> */}
        </div>
      </Router>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
