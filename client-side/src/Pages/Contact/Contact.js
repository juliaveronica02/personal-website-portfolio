import React, { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        // Set phone number dynamically
        const phoneElement = document.querySelector(".ph");
        if (phoneElement) {
            phoneElement.textContent = phoneElement.getAttribute("data-ph");
        }

        // Set email dynamically
        const emailElement = document.querySelector(".post");
        if (emailElement) {
            const user = emailElement.getAttribute("data-email-user");
            const website = emailElement.getAttribute("data-email-website");
            if (user && website) {
                emailElement.textContent = user.split("").reverse().join("") + "@" + website.split("").reverse().join("");
            }
        }
    }, []);

    return (
        <section className="cta-full section pb-0 pt-10" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div data-aos="fade-up" data-aos-duration="800">
                            <div className="section-title">
                                <h4 className="title title-line text-uppercase mb-4 pb-4">Contact Me</h4>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    If you have got any questions, feel free to contact me.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="phone" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Phone</h5>
                                <p className="text-muted">Company phone number</p>
                                <span className="ph" data-ph="+173 877 388 84" style={{color:' #f89d36'}}></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="mail" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Email</h5>
                                <p className="text-muted">Company email address</p>
                                <span className="post" data-email-user="md.software.house" data-email-website="gmail.com" style={{color:' #f89d36'}}></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="map-pin" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title text-uppercase">Location</h5>
                                <p className="text-muted">Batam, Indonesia</p>
                                <a style={{color:' #f89d36'}} href="https://www.google.com/maps?q=Indonesia" className="video-play-icon text-decoration-none">
                                    View on Google map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center pt-5 mt-3 pb-5 mb-3">
                    <div className="col-lg-12">
                        <div className="custom-form mb-sm-30">
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input name="name" id="name" type="text"
                                                        className="form-control border rounded" placeholder="Name" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input name="email" id="email" type="email"
                                                        className="form-control border rounded" placeholder="Email" maxLength="50"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input name="mail-subject" id="mail-subject" type="text"
                                                        className="form-control border rounded" placeholder="Subject" maxLength="70"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 lastname">
                                                <div className="form-group">
                                                    <input name="lastname" id="lastname" type="text"
                                                        className="form-control border rounded" placeholder="Last name" maxLength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <textarea name="comments" id="comments" rows="4"
                                                className="form-control border rounded" placeholder="Message" maxLength="1000"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary"
                                            value="Send Message"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;