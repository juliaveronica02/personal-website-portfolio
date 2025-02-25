import React, { useEffect } from "react";
import ProfileImg from "../../Images/1.jpeg";
import { ReactTyped } from "react-typed";
import "../../Styling/Content.css";

const About = () => {
    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);
    return (
        <section className="section pb-3" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <div className="about-hero">
                            <img
                                src={ProfileImg}
                                className="img-fluid mx-auto d-block about-tween position-relative hero"
                                alt="Julia Veronica transparent profile photo"
                            />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title mb-0 ml-lg-5 ml-md-3">
                            <h4 className="title mb-3" style={{ color: '#f89d36' }}>Julia Veronica</h4>
                            <h6 className="designation mb-3">
                                I am a Passionate{" "}
                                <ReactTyped style={{ color: '#f89d36' }}
                                    strings={["Full-Stack Web Developer"]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop
                                />
                            </h6>
                            <p className="text-muted justify-text">
                                I am an Information Technology Specialist with a strong background in the education
                                technology industry and a degree in Information Systems. My expertise spans full-stack
                                development, curriculum design, and building startups, with a particular focus on the
                                JavaScript programming language.

                            </p>
                            <p className="text-muted justify-text">
                                A passionate learner and experimenter, I thrive on exploring new technologies and
                                innovative solutions. I excel both independently and in collaborative team environments,
                                always seeking opportunities for growth and improvement.
                            </p>
                            {/* <img src="images/jpg/sign.jpg" height="27" alt="Sign" /> */}
                            <div className="mt-4" >
                                <a
                                    href="https://www.linkedin.com/in/julia-veronica/"
                                    className="btn btn-primary mouse-down"
                                    style={{ background: '#f89d36', borderColor: '#f89d36' }}
                                >
                                    View LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hobbies & Interests Section */}
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">
                                Hobbies & Interests
                            </h4>
                            <p className="text-muted mx-auto para-desc mb-0">
                                I enjoy being physically active and spend a lot of time playing
                                sports and team games.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="10">
                            <a href="https://github.com/juliaveronica02" target="_blank" className="test text-decoration-none">
                                <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                    <div className="hobbies d-flex align-items-center">
                                        <div className="text-center rounded-pill me-4">
                                            <i data-feather="monitor" className="icon fea icon-md-sm"></i>
                                        </div>

                                        <div className="content">
                                            <h6 className="title mb-0">Developing</h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in"
                            data-aos-delay="500"
                            data-aos-duration="500">
                            <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                <div className="hobbies d-flex align-items-center">
                                    <div className="text-center rounded-pill me-4">
                                        <i data-feather="hexagon" className="icon fea icon-md-sm"></i>
                                    </div>
                                    <div className="content" >
                                        <h6 className="title mb-0">Gym</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in"
                            data-aos-delay="600"
                            data-aos-duration="500">
                            <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                <div className="hobbies d-flex align-items-center">
                                    <div className="text-center rounded-pill me-4">
                                        <i data-feather="box" className="icon fea icon-md-sm"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title mb-0">Games</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in"
                            data-aos-delay="700"
                            data-aos-duration="500">
                            <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                <div className="hobbies d-flex align-items-center">
                                    <div className="text-center rounded-pill me-4">
                                        <i data-feather="video" className="icon fea icon-md-sm"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title mb-0">Movie</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in"
                            data-aos-delay="700"
                            data-aos-duration="500">
                            <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                <div className="hobbies d-flex align-items-center">
                                    <div className="text-center rounded-pill me-4">
                                        <i data-feather="target" className="icon fea icon-md-sm"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title mb-0">Travel</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2">
                        <div data-aos="zoom-in"
                            data-aos-delay="700"
                            data-aos-duration="500">
                            <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                <div className="hobbies d-flex align-items-center">
                                    <div className="text-center rounded-pill me-4">
                                        <i data-feather="music" className="icon fea icon-md-sm"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title mb-0">Music</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;