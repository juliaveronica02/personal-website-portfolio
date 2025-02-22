import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> */}
      <nav className="navbar navbar-expand-lg navbar-inverse sticky-top navbar-dark bg-info" style={{position: 'fixed', top: 0, width: '100%', zIndex: 1050 }}>
        <Link className="navbar-brand ml-3" style={{ fontSize: "1.5rem" }} to="/">
          Julia Veronica
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-3" id="navbarColor01">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              <Link className="nav-link pr-3" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pr-3" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pr-3" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pr-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pr-3" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}