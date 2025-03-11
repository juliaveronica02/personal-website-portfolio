import React from "react";
import Slider from "react-slick";

const ProjectSlider = ({ projects }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: Math.min(3, projects.length),
        slidesToScroll: 1,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <div key={index} className="p-3">
                    <div data-aos="fade-up" data-aos-duration="600">
                        <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5">
                            <div className="icon" style={{ display: 'flex', color: 'rgb(248, 157, 54)', justifyContent: 'center' }}>
                                <img src={project.img} alt={project.title} style={{ width: "200px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
                            </div>
                            <div className="content mt-4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="test text-decoration-none">
                                    <h5 className="title">{project.title}</h5>
                                    <p className="text-muted mt-3 mb-0">{project.description}</p>
                                </a>
                            </div>
                            <div className="big-icon">
                                <i data-feather="airplay" className="fea icons"></i>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default ProjectSlider;