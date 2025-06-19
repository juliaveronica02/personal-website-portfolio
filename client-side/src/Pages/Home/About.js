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
            <div className="container" >
                <div className="row align-items-center" style={{ margin: '85px 0px -50px 0px'}}>
                    {/* Left Column */}
                    <div className="col-md-6" style={{marginBottom: '19.5rem'}}>
                        <div className="section-title">
                            <h4 className="title mb-3" style={{ color: '#f89d36' }}>Who Am I?</h4>
                            <p className="text-muted text-justify">
                                I am an Information Technology Specialist with a strong background in the education
                                technology industry and a degree in Information Systems. My expertise spans full-stack
                                development, curriculum design, and building startups, with a particular focus on the
                                JavaScript programming language.
                            </p>
                            <p className="text-muted text-justify">
                                A passionate learner and experimenter, I thrive on exploring new technologies and
                                innovative solutions. I excel both independently and in collaborative team environments,
                                always seeking opportunities for growth and improvement.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <div className="section-title">
                            <h4 className="title mb-3" style={{ color: '#f89d36' }}>Professional Highlights</h4>
                            <ul className="list-unstyled">
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        <strong>Full Stack & Backend Developer </strong> with hands-on experience in Java (Quarkus), Node.js, PHP, and the MERN stack.
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Skilled in logistics <strong> tech integration</strong>, including CargoWise, Warehouse Management Systems (WMS), and ETL using Apache NiFi.
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Founder of Teknokasi, an <strong>EdTech startup</strong> focused on tech education and JavaScript curriculum development.
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        <strong>Certified in UI/UX Design</strong> with strong design skills using Figma, Adobe XD, and Adobe Photoshop
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Proficient in cloud deployment and DevOps practices using Docker, AWS, and DigitalOcean.
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Awarded 3rd place in Open World Startup Competition and Top 100 in Entrepreneurship Award VI.
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Multilingual: fluent in English, Bahasa Indonesia, Mandarin, and basic Japanese (N5 level).
                                    </div>
                                </li>
                                <li className="d-flex mb-3">
                                    <span className="me-2 mt-1 text-primary">✔️</span>
                                    <div>
                                        Published author of academic journals in education technology and information systems.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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