import React, { useEffect } from "react";
import Slider from "react-slick";
import ProfileImg from "../../Images/1.jpeg";
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
        <section className="section pb-3" id="about">
            <div className="container">
                <div className="row align-items-center" style={{margin: '85px 0px 230px 0px'}}>
                    <div className="col-lg-5 col-md-5">
                        <div className="about-hero">
                            <img
                                src={ProfileImg}
                                className="img-fluid mx-auto d-block about-tween position-relative hero"
                                alt="Julia Veronica transparent profile"
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
                            <img src="images/jpg/sign.jpg" height="27" alt="Sign" />
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
                <Slider {...settings} className="hobbies-carousel">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="p-3">
                            <div className="interests-desc bg-light px-4 py-3 rounded text-center">
                                <i data-feather={hobby.icon} className="icon fea icon-md-sm"></i>
                                <h6 className="title mt-2">{hobby.title}</h6>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default About;