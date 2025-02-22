import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-inverse sticky-top navbar-dark bg-info">
        <Link className="navbar-brand" href="#">
          Julia Veronica
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container">
            <ul className="navbar-nav text-danger ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portofolio">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <div>
                  <Link className="btn btn-outline-danger mr-4" to="/hire">
                    Hire Me
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
//   render() {
//     return (
//       <div>
//         <nav classNameName="navbar navbar-expand-lg navbar-light bg-light sticky-top stroke">
//           <div classNameName="container">
//             <Link classNameName="navbar-brand" to="/">
//               <h5>Julia Veronica</h5>
//             </Link>
//             <button
//               classNameName="navbar-toggler"
//               type="button"
//               data-toggle="collapse"
//               data-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span classNameName="navbar-toggler-icon" />
//             </button>
//             <div
//               classNameName="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul classNameName="navbar-nav ml-auto">
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link" to="/portfolio">
//                     Portfolio
//                   </Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link" to="/hire">
//                     Hire me
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
