import React from "react";
import eCommerce from "../assets/portfolio.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>This project is a unique part of development 🧩</h3>
            <div className="projects-grid">
              <div className="pro pro__1 undefined">
                <div className="pro__img">
                  <a target="_blank" href="#profile" rel="noreferrer">
                    <img
                      src={eCommerce}
                      alt="website"
                      style={{
                        transform: "translateY(0%)",
                        boxSizing: "border-box",
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="pro__text">
                  <h3>
                    Leo-Elvis.Omeire
                    <span className="date-className">(July 2024)</span>
                  </h3>
                  <p>
                    "Leo-Elvis.Omeire" my personal portfolio project developed using react,
                    tailwindCSS and javascript.my portfolio showcases a diverse range that reflect my passion
                    for innovation, problem-solving, and commitment to excellence in computer Science.
                    also this encapsulates my professional evolution, featuring Projects that demonstrates my dedication to quality, collaboration and continuous learning in the field
                    of Computer Science.
                  </p>
                  <div className="stack">
                    <p>React</p>
                    <p>CSS</p>
                    <p>javascript</p>
                  </div>
                  <div className="links">
                    <a
                      target="_blank"
                      href="#profile"
                      rel="noreferrer">
                      Code
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-brand-github">
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="#about"
                      rel="noreferrer">
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-external-link">
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                        <path d="M11 13l9 -9"></path>
                        <path d="M15 4h5v5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
