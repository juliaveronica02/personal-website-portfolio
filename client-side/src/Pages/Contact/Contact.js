import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default class componentName extends Component {
  render() {
    return (
      // bagi dua colom untuk buat submit form dan keterangan lokasi
      <div className="container mt-5 mb-4" id="/contact">
        <h3 className="text-center">Contact Me</h3>
        <hr className="contact" />
        <div class="row">
          <div class="col-md-4">
            {/* map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0093712115136!2d104.02249791421347!3d1.1537959624967078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9891f0f065b81%3A0xce0af55f7ad4f2c2!2sBengkong%20Jaya%20Housing%20Complex!5e0!3m2!1sen!2sid!4v1585363445287!5m2!1sen!2sid"
              width="100%"
              height="450"
              frameborder="0"
              title="myFrame"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          {/* form */}
          <div className="col-md-4">
            <form action="https://formspree.io/meqradna" method="POST">
              <input
                className="form-control"
                name="name"
                placeholder="Name..."
              />
              <br />
              <input
                className="form-control"
                name="phone"
                placeholder="Phone..."
              />
              <br />
              <input
                className="form-control"
                name="_replyto"
                placeholder="E-mail..."
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                placeholder="What can I help you?"
                style={{ height: "150px" }}
              ></textarea>
              <br />
              <input
                className="btn btn-outline-primary"
                type="submit"
                value="Submit"
              />
              <br />
              <br />
            </form>
          </div>
          <div className="col-md-4">
            {/* information */}
            {/* <b>Contact Me:</b> <br /> */}
            Phone: +62 85363617950
            <br />
            E-mail: <Link to="www.google.com">me@juliaveronica.com</Link>
            <br />
            <br />
            <br />
            <b>Address:</b>
            <br />
            Batam, Indonesia <br />
            Batam Center
            <br />
          </div>
        </div>
      </div>
    );
  }
}
