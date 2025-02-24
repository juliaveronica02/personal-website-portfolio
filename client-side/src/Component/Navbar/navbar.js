import React, { useEffect, useState } from "react";
import "../../Styling/Navbar.css";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top navbar-custom ${isSticky ? "nav-sticky" : ""}`}>
            <div className="container">
                <a className="navbar-brand mouse-down" href="#home">Julia Veronica</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span data-feather="menu" className="fea icon-md"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#expertise">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon">
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/julia-veronica/" target="_blank" rel="noopener noreferrer"><i
                            className="mdi mdi-linkedin"></i></a></li>
                        <li className="list-inline-item"><a href="https://github.com/juliaveronica02" target="_blank" rel="noopener noreferrer"><i
                            className="mdi mdi-github"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.facebook.com/juliaveronica02/" target="_blank" rel="noopener noreferrer"><i
                            className="mdi mdi-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/juliaveronica.2" target="_blank" rel="noopener noreferrer"><i
                            className="mdi mdi-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
