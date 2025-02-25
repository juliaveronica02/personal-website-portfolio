import React, { Component } from "react";
import "./Home.css";
import Me from "../../Images/1.jpeg";
import SocialMedia from "./Social-Media";
import CV from "./myCV.pdf";

export default class componentName extends Component {
  render() {
    return (
      <div id="/">
        <div className="bg">
          <div className="container pt-5 d-flex justify-content-center">
            <div className="row bg-pic">
              <div className="profile pt-3">
                <img src={Me} alt="profile" />
              </div>
              <div className="col-md-6 mx-5 my-3 text-center">
                <h2 className="md-5 mt-5">Julia Veronica</h2>
                <hr className="md home" />
                <h6 id="overflowTest">
                  {/* I'am Julia Veronica.. I want to improve my programming. I have
                  background programming but it was Unity C#. Now I join Glints
                  X Impact Byte "Full Stack Developer Javascript". */}
                  Julia is a fresh graduate from Glints Academy batch 6 Impact Byte who takes 
                  Full Stack Javascript course during her time there. She started programming 
                  by learning HTML, CSS, and Javascript. During high school, she also had an 
                  internship for 4 months as a Junior Programmer. Julia is a hard worker, 
                  always eager to learn new things, and she can also work individually or 
                  in a team. 
                </h6>
                <div>
                  <a href={CV} download="My CV">
                    <button className="btn btn-primary mt-3">
                      <i className="fa fa-download"></i> Download CV
                    </button>
                  </a>
                </div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
