import React from "react";
import { ReactTyped } from "react-typed";
import Header_IMG from "../../Images/header.png"
import "./content.css"

export default function HomeBanner() {
  const resumeFile = "/path/to/your/resume.pdf";

  return (
    <section className="home mt-4">
      <div className="left-column">
        <div className="left-column__content">
          <h3 className="mb-4 title">Hi, I'm Julia Veronica, a {""} <br/>
          <ReactTyped strings={["Developers and Gamers.", // "Back End Developer", //"Fullstack Developer,","Gamer,", //"Video Editor",
            ]} typeSpeed={100} loop />
            </h3>
          <h5 className="subtitle">
          I am an Information Technology professional with extensive experience in the educational technology sector and hold a degree in Information Systems. My expertise includes building start-ups, full-stack development, and designing curricula in JavaScript. I am a passionate learner who enjoys experimenting, constantly seeks new challenges, and is capable of working both independently and collaboratively.
          </h5>

          <a
            className="home-banner__button mt-3"
            href={resumeFile}
            download="Julia Veronica Resume"
          >
            Download My Resume
          </a>
          <a className="home-banner__button" href="#skills">
            My Skills
          </a>
        </div>
      </div>

      <div className="right-column">
        <img src={Header_IMG} alt="header"/>
      </div>
    </section>
  );
}