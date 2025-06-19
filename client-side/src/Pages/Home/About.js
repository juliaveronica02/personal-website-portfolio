import React, { useEffect } from "react";
import Slider from "react-slick";
// import ProfileImg from "../../Images/1.jpeg";
import { ReactTyped } from "react-typed";
import "../../Styling/Content.css";

const hobbies = [
    { icon: "monitor", title: "Developing" },
    { icon: "hexagon", title: "Gym" },
    { icon: "box", title: "Games" },
    { icon: "video", title: "Movie" },
    { icon: "target", title: "Travel" },
    { icon: "music", title: "Music" },
];

const About = () => {
    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <section className="section-content" id="about">
            {/* Hobbies & Interests Carousel */}
            <div className="container mt-100 mt-60 mb-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">Hobbies & Interests</h4>
                            <p className="text-muted mx-auto para-desc mb-0">I enjoy being physically active and spend a lot of time playing sports and team games.</p>
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