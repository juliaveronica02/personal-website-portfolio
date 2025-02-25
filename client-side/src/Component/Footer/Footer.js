import React, { useEffect } from "react";
import "../../Styling/Footer.css";

const Footer = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } }, // Number of particles
                    color: { value: "#ffffff" }, // Particle color
                    shape: {type: "circle", stroke: { width: 0, color: "#000000" }},
                    opacity: { value: 0.5, random: false },
                    size: { value: 3, random: true },
                    move: {enable: true,speed: 10,direction: "none",random: false,straight: false, out_mode: "out", bounce: false},
                    line_linked: {enable: true,distance: 150,color: "#ffffff",opacity: 0.4,width: 1 }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" }, // Moves away on hover
                        onclick: { enable: true, mode: "push" } // Adds particles on click
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                        push: { particles_nb: 4 }
                    }
                },
                retina_detect: true
            });
        }
    }, []);

    return (
        <footer className="footer bg-dark" id="footer-container" style={{ position: "relative", overflow: "hidden" }}>
            {/* Particles.js Background */}
            <div id="particles-js" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 0
            }}></div>

            {/* Footer Content */}
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <p style={{color: "#ffffff", fontSize:'30px', fontFamily: '"Poppins", sans-serif',fontWeight: 600, letterSpacing: "1px", lineHeight: "24px"}}>
                            Julia Veronica
                        </p>
                        <p className="para-desc mx-auto mt-5">
                            Obviously, I am a passionate learner and experimenter. <br/> 
                            I thrive on exploring new technologies and innovative solutions.
                        </p>
                        <ul className="list-unstyled mb-0 mt-4 social-icon">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/julia-veronica/" target="_blank" rel="noopener noreferrer">
                                    <i className="mdi mdi-linkedin"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/juliaveronica02" target="_blank" rel="noopener noreferrer">
                                    <i className="mdi mdi-github"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/juliaveronica02/" target="_blank" rel="noopener noreferrer">
                                    <i className="mdi mdi-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/juliaveronica.2" target="_blank" rel="noopener noreferrer">
                                    <i className="mdi mdi-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.reddit.com/user/RecaliaBleweed8826/" target="_blank" rel="noopener noreferrer">
                                    <i className="mdi mdi-reddit"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;