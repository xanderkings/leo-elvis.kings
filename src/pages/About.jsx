import React from "react";

import about from "../assets/about-img.62b47e7f183d4b4e9feb.webp";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={about} alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A Wellspring Computer Scientist <br />
                based in Benin, Nigeria 📍
              </h4>
              <p>
                I am a driven Computer Science Student with a passion for software
                development. My academic background and hands-on experience in
                CSS,Javascript,Python and various technologies equip me with the knowledge to contribute
                effectively to innovative projects. I am eager to collaborate on
                challenging assignments and continue my growth as a Computer Scientist.
                Open to new opportunities and connections in the tech
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
