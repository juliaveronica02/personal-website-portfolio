import React, { useEffect, useState } from "react";

const ProjectSlider = ({ projects }) => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;

    // Reset startIndex to 0 when projects change (new category selected)
    useEffect(() => {
        setStartIndex(0);
    }, [projects]);

    const nextSlide = () => {
        if (startIndex + visibleCards < projects.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="position-relative d-flex justify-content-center align-items-center mt-4">
            {/* Left Button (Hidden if at the first item) */}
            {startIndex > 0 && (
                <button className="btn btn-outline-primary position-absolute start-0 ms-3" onClick={prevSlide}>
                    {"<"}
                </button>
            )}

            {/* Project Items */}
            <div className="d-flex justify-content-center overflow-hidden" style={{ width: "80%" }}>
                {projects.slice(startIndex, startIndex + visibleCards).map((project, index) => (
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
            </div>

            {/* Right Button (Hidden if at the last item) */}
            {startIndex + visibleCards < projects.length && (
                <button className="btn btn-outline-primary position-absolute end-0 me-3" onClick={nextSlide}>
                    {">"}
                </button>
            )}
        </div>
    );
};

export default ProjectSlider;