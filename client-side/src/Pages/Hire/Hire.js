import React, { Component } from "react";
import "./Hire.css";

export default class componentName extends Component {
  render() {
    return (
      <div className="container mt-4" id="/hire">
        <div className="section-title">
          <h2 className="mx-auto text-center">Resume</h2>
          <hr className="hr2 mb-5" />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Julia Veronica</h4>
              <p>
                <em>
                  Innovative and deadline-driven C# programming Language with 4
                  month of experience programming and developing user-centered
                  with game using unity.
                </em>
              </p>
              <p></p>
              <ul>
                <li>PT.Labtech Penta International, Sekupang</li>
                {/* <li>(123) 456-7891</li> */}
                <li>labtech.org</li>
              </ul>
              <p />
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>
                Vocational High School Maitreyawira Batam &amp; Multimedia
              </h4>
              <h5>2016 - 2019</h5>
              <p>
                <em>Batam, Kepulauan Riau, Indonesia</em>
              </p>
              <p>
                At school I learn the basic how to use Adobe (photoshop for edit
                picture or logo design, make simple animate using adobe flash
                combine wih adobe after effect, and edit video using adobe
                premier), programming language (at 10 grade, I learn C
                programming language the app I use is DevC++, but when 11 grade
                I internship at PT Labtech Penta International and learn C#
                programming language and the app using unity, and i also learn
                how to build simple website using HTML and CSS).
              </p>
            </div>
            <div className="resume-item">
              <h4> Collage Student &amp; Information System</h4>
              <h5>2019 - Now</h5>
              <p>
                <em>UIB, Batam, Indonesia</em>
              </p>
              <p>
                I am not a graduate but I joined some of the activities in my
                college. An example is Buddy and Glints Academy X Impact Byte.
              </p>
            </div>
          </div>
          <hr class="vertical" />
          <div className="col-lg-6 pl-4">
            <h3 className="resume-title"> Experience</h3>
            <div className="resume-item">
              <h4>Junior Programmer</h4>
              <h5>January 2018 - Mei 2018</h5>
              <p>
                <em>PT Labtech Penta International, Batam, Indonesia</em>
              </p>
              <p></p>
              <ul>
                <li>Learn management time.</li>
                <li>Learn basic C# on Unity.</li>
              </ul>
              <p />
            </div>
            <div className="resume-item">
              <h4>Fullstack Developer Javascript Batch 6</h4>
              <h5>2020 - 2020</h5>
              <p>
                <em>Batam, Indonesia</em>
              </p>
              <p></p>
              <ul>
                <li>Learn basic Frontend and Backend.</li>
                <li>How to management project on Team or Individual.</li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
