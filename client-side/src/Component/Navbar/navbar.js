import React, { useEffect, useState } from "react";
import "../../Styling/Navbar.css";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${isSticky ? "nav-sticky" : ""}`}>
            <div className="container">
                <a className="navbar-brand mouse-down" href="#home">Julia Veronica</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="mdi mdi-menu"></span>
                </button>

                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className={`nav-link ${activeSection === "home" ? "active" : ""}`} href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === "services" ? "active" : ""}`} href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === "resume" ? "active" : ""}`} href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === "expertise" ? "active" : ""}`} href="#expertise">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeSection === "contact" ? "active" : ""}`} href="#contact">Contact</a>
                        </li>
                    </ul>

                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/julia-veronica/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://github.com/juliaveronica02" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.facebook.com/juliaveronica02/" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/juliaveronica.2" target="_blank" rel="noopener noreferrer"><i className="mdi mdi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
