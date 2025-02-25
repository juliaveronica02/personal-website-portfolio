import React, { useState } from "react";
import Slider from "react-slick";
import WheatherApp from "../../Images/WeatherApp.png";
import CompanyProfile from "../../Images/chevrolet.png";
import PersonalWeb from "../../Images/personalWeb.png";
import ReactNativeStyling from "../../Images/react.png"

const rawProjects = [
    { title: "Weather App", category: "HTML, CSS, JavaScript", img: WheatherApp, link: "/WheatherApp/index.html", description: "This portfolio project was created during my time at Impact Byte Bootcamp and utilizes the OpenWeather API." },
    { title: "Company Profile", category: "HTML, CSS, JavaScript", img: CompanyProfile, link: "/companyProject/index.html", description: "Chevrolet is a company profile website that I track as part of my portfolio." },
    { title: "Personal Website", category: "HTML, CSS, JavaScript", img: PersonalWeb, link: "/Responsive-Web-Design/index.html", description: "Build personal website using HTML and CSS without Bootstrap." },
    { title: "Stopwatch", category: "HTML, CSS, JavaScript", img: CompanyProfile, link: "/Stopwatch/index.html", description: "I developed a stopwatch using JavaScript, HTML, and CSS." },
    
    { title: "React Native", category: "Mobile App", img: ReactNativeStyling, link: "https://github.com/juliaveronica02/learn-react-native", description: "This project covers styling, importing images, configuring Android permissions, and using useState. Check out the project on GitHub!" },
    
    { title: "Personal Website", category: "Frontend", img: PersonalWeb, link: "https://mejuliaveronica02.netlify.app/", description: "Another version of my personal website, now built using React.js for a more dynamic and interactive experience." },
    
    { title: "Comming Soon", category: "Backend", img: WheatherApp, link: "/Portfolio/index.html", description: "A personal portfolio using backend technologies." },
    
    { title: "Portfolio Website", category: "FullStack", img: WheatherApp, link: "/Portfolio/index.html", description: "A full-stack portfolio project." },
    
    { title: "Portfolio Website", category: "Start-Up", img: WheatherApp, link: "/Portfolio/index.html", description: "A project in a startup environment." },
    
    { title: "Portfolio Website", category: "Game Development", img: WheatherApp, link: "/Portfolio/index.html", description: "A game development portfolio." },
    
    { title: "Portfolio Website", category: "Multimedia", img: WheatherApp, link: "/Portfolio/index.html", description: "A multimedia portfolio." },
    
    { title: "Portfolio Website", category: "Publications", img: WheatherApp, link: "/Portfolio/index.html", description: "A publication portfolio." },

    { title: "Comming Soon", category: "Publications", img: WheatherApp, link: "/Portfolio/index.html", description: "Stay tuned exciting new projects are in development.!" },
];

const categoryDescriptions = {
    "HTML, CSS, JavaScript": "Projects built using core web technologies: HTML, CSS, and JavaScript, ensuring responsive and interactive designs.",
    "Frontend": "Interactive and responsive user interfaces crafted with modern frameworks and libraries.",
    "Backend": "Robust server-side applications ensuring seamless data management and security.",
    "FullStack": "Complete web solutions integrating frontend and backend technologies.",
    "Mobile App": "Engaging mobile-first applications optimized for performance.",
    "Game Development": "Interactive and immersive gaming experiences.",
    "Multimedia": "Creative works blending design, animation, and interactivity.",
    "Start-Up": "Scalable and innovative tech solutions for emerging businesses.",
    "Publications": "Research-backed insights and documentation on development methodologies.",
};

// Function to generate category-based IDs
const generateProjectsWithIds = (projects) => {
    const categoryMap = {};

    return projects.map((project) => {
        if (!categoryMap[project.category]) {
            categoryMap[project.category] = 1;
        } else {
            categoryMap[project.category]++;
        }

        return {
            ...project,
            id: categoryMap[project.category], // Assign category-based ID
        };
    });
};

const projects = generateProjectsWithIds(rawProjects);

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [startIndex, setStartIndex] = useState(0);

    const categories = ["All", ...new Set(projects.map(project => project.category))];

    const maxVisible = 6; // Show max 6 categories at a time

    // Handle category scrolling
    const handleNextCategory = () => {
        if (startIndex + maxVisible < categories.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrevCategory = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleCategories = categories.slice(startIndex, startIndex + maxVisible);

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: Math.min(3, filteredProjects.length),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: Math.min(1, filteredProjects.length), slidesToScroll: 1 },
            },
        ],
    };

    return (
        <section className="section bg-light" id="expertise">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">Recent Works</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Explore my diverse portfolio showcasing projects across multiple categories, including Frontend, Backend, Full Stack Development, Mobile Apps, Game Development, Multimedia, Start-Ups, and Publications. I specialize in creating dynamic, user-friendly applications, leveraging various technologies such as HTML, CSS, JavaScript, React.js, Node.js, and more.</p><br />
                            <p className="text-muted mx-auto para-desc mb-0">
                                {selectedCategory === "All"
                                    ? "Explore my diverse portfolio showcasing projects across multiple categories."
                                    : categoryDescriptions[selectedCategory] || "Explore projects in this category."}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Tabs for filtering */}
                <div className="text-center mb-4 d-flex justify-content-center align-items-center">
                    {startIndex > 0 && (
                        <button
                            className="btn mx-2"
                            onClick={handlePrevCategory}
                            disabled={startIndex === 0}
                            style={{ backgroundColor: startIndex === 0 ? "gray" : "white", color: startIndex === 0 ? "white" : "black", cursor: startIndex === 0 ? "not-allowed" : "pointer" }}
                        >
                            {"<"}
                        </button>
                    )}

                    {visibleCategories.map((category, index) => (
                        <button
                            key={index}
                            className={`btn mx-1 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}

                    {startIndex + maxVisible < categories.length && (
                        <button
                            className="btn mx-2"
                            onClick={handleNextCategory}
                            disabled={startIndex + maxVisible >= categories.length}
                            style={{ backgroundColor: startIndex + maxVisible >= categories.length ? "gray" : "white", color: startIndex + maxVisible >= categories.length ? "white" : "black", cursor: startIndex + maxVisible >= categories.length ? "not-allowed" : "pointer" }}
                        >
                            {">"}
                        </button>
                    )}
                </div>

                {/* Carousel */}
                <Slider {...settings}>
                    {filteredProjects.map((project) => (
                        <div key={project.category + "-" + project.id} className="p-3">
                            <div data-aos="fade-up" data-aos-duration="600">
                                <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5">
                                    <div className="icon" style={{ display: 'flex', color: 'rgb(248, 157, 54)', justifyContent: 'center' }}>
                                        <img src={project.img} alt={project.title} style={{width: "200px",height: "100px",objectFit: "cover",borderRadius: "8px"}} />
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
            </div>
        </section>
    );
};

export default Portfolio;
