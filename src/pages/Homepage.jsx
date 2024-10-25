import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
