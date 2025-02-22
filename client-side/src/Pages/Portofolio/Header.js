import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Header.css";
import HTML from "../../Images/html.png";
import CSS from "../../Images/css.png";
import Bootstrap from "../../Images/bootstrap.png";
import Javascript from "../../Images/Javascript.png";
import Reactjs from "../../Images/react.png";
import Nodejs from "../../Images/nodejs.png";
import Database from "../../Images/database.png";
import Csharp from "../../Images/csharp.png";
import Photoshop from "../../Images/photoshop.png";
import Photography from "../../Images/photography.png";
import AWS from "../../Images/aws.png";
import Golang from "../../Images/golang.png";
import ReactNative from "../../Images/react-native.png";
import Portfolio from "./Portfolio.js";
export default class componentName extends Component {
  render() {
    return (
      // Ability
      <div id="/portofolio">
        <div className="text-center text-dark ccard mt-5 mb-5">
          <h2 className="mt-5">My Ability</h2>
          <hr className="horizontal-line" />
        </div>
        <div className="row pl-2 d-flex justify-content-center">
          {/* HTML CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={HTML} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">HTML</h4>
              </div>
            </div>
          </div>
          {/* CSS CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={CSS} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">CSS</h4>
              </div>
            </div>
          </div>
          {/* BOOTSTRAP CARD. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Bootstrap} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Bootstrap</h4>
              </div>
            </div>
          </div>
          {/* Javascript card. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Javascript} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Javascript</h4>
              </div>
            </div>
          </div>
          {/* Reactjs card. */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Reactjs} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Reactjs</h4>
              </div>
            </div>
          </div>
          {/* Nodejs */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Nodejs} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Nodejs</h4>
              </div>
            </div>
          </div>
          {/* Database */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Database} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Database</h4>
              </div>
            </div>
          </div>
          {/* C# */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Csharp} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">C#</h4>
              </div>
            </div>
          </div>
          {/* Adobe Photoshop */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Photoshop} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Adobe Photoshop</h4>
              </div>
            </div>
          </div>
          {/* Photography */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Photography} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Photography</h4>
              </div>
            </div>
          </div>
           {/* AWS */}
           <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={AWS} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">AWS</h4>
              </div>
            </div>
          </div>
          {/* Golang */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={Golang} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">Golang</h4>
              </div>
            </div>
          </div>
          {/* React-Native */}
          <div className="col-md-3 mb-3">
            <div className="card" style={{ width: "15rem" }}>
              <div className="rounded-circle">
                <img src={ReactNative} alt="..." />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center">React Native</h4>
              </div>
            </div>
          </div>
          {/* ending */}
          <Portfolio />
        </div>
      </div>
    );
  }
}
