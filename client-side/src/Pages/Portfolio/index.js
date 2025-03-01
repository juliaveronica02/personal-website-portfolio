import React, { useState } from "react";
import Slider from "react-slick";
import WheatherApp from "../../Images/WeatherApp.png";
import CompanyProfile from "../../Images/chevrolet.png";
import PersonalWeb from "../../Images/personalWeb.png";
import ReactNativeStyling from "../../Images/react.png"
import CSVToJSON from "../../Images/ConvertCsvToJson.PNG"
import CSVToXML from "../../Images/CSVtoXML.PNG"
import XMLToCSV from "../../Images/XMLtoCSV.PNG"
import XMLtoCSVEvaluateXQuery from "../../Images/XMLtoCSVEvaluateXQuery.PNG"
import NifiHierarchy from "../../Images/NifiHierarchy.PNG"
import NifiFlat from "../../Images/NifiFlat.PNG"
import VisualMemory from "../../Images/VisualMemory.PNG"
import PerancanganLogo from "../../Images/PerancanganLogo.PNG"
import ImmersiveLearningVR from "../../Images/ImmersiveLearningVR.PNG"
import ITCurriculum from "../../Images/ITCurriculum.PNG"
import ComingSoon from "../../Images/ComingSoon.png"

const rawProjects = [
    { title: "Weather App", category: "HTML, CSS, JavaScript", img: WheatherApp, link: "/WheatherApp/index.html", description: "This portfolio project was created during my time at Impact Byte Bootcamp and utilizes the OpenWeather API." },
    { title: "Company Profile", category: "HTML, CSS, JavaScript", img: CompanyProfile, link: "/companyProject/index.html", description: "Chevrolet is a company profile website that I track as part of my portfolio." },
    { title: "Personal Website", category: "HTML, CSS, JavaScript", img: PersonalWeb, link: "/Responsive-Web-Design/index.html", description: "Build personal website using HTML and CSS without Bootstrap." },
    { title: "Stopwatch", category: "HTML, CSS, JavaScript", img: CompanyProfile, link: "/Stopwatch/index.html", description: "I developed a stopwatch using JavaScript, HTML, and CSS." },
    
    { title: "React Native", category: "Mobile App", img: ReactNativeStyling, link: "https://github.com/juliaveronica02/learn-react-native", description: "This project covers styling, importing images, configuring Android permissions, and using useState. Check out the project on GitHub!" },
    
    { title: "Personal Website", category: "Frontend", img: PersonalWeb, link: "https://mejuliaveronica02.netlify.app/", description: "Another version of my personal website, now built using React.js for a more dynamic and interactive experience." },
    
    { title: "Comming Soon", category: "Backend", img: WheatherApp, link: "", description: "A personal portfolio using backend technologies." },
    
    { title: "Portfolio Website", category: "FullStack", img: ComingSoon, link: "/Portfolio/index.html", description: "A full-stack portfolio project." },
    
    { title: "CSV to JSON", category: "ETL & Data Integration", img: CSVToJSON, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "An ETL pipeline using Apache NiFi to automate the conversion of CSV data into structured JSON format, enabling seamless data integration and transformation for backend systems." },
    { title: "CSV to XML", category: "ETL & Data Integration", img: CSVToXML, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "An ETL workflow built using Apache NiFi to automate the conversion of CSV data to XML format." },
    { title: "XML to CSV", category: "ETL & Data Integration", img: XMLToCSV, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Designed and implemented an Apache NiFi data flow to efficiently convert XML files into CSV format." },
    { title: "XML to CSV Using Evaluate XQuery", category: "ETL & Data Integration", img: XMLtoCSVEvaluateXQuery, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Developed a robust Apache NiFi data pipeline that efficiently converts XML files into CSV format using the EvaluateXQuery processor." },
    { title: "Hierarchy", category: "ETL & Data Integration", img: NifiHierarchy, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Implemented efficient data flow processing, including parsing, transformation, and validation, ensuring seamless data integration for downstream analytics and reporting." },
    { title: "Flat", category: "ETL & Data Integration", img: NifiFlat, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Developed an Apache NiFi data pipeline to automate the extraction, transformation, and loading (ETL) process, converting XML files into structured CSV format for seamless data integration." },

    { title: "Portfolio Website", category: "Start-Up", img: WheatherApp, link: "/Portfolio/index.html", description: "A project in a startup environment." },
    
    { title: "Visual Memory", category: "Game Development", img: VisualMemory, link: "https://drive.google.com/drive/u/0/folders/1U0q-wORdrb_njOxPAqivLCmqszZks84w", description: "Visual memory helps children recall things they have seen before. It plays a crucial role in their ability to recognize and remember images, objects, and patterns." },
    
    { title: "Portfolio Website", category: "Multimedia", img: WheatherApp, link: "/Portfolio/index.html", description: "A multimedia portfolio." },
    
    { title: "IT  Curriculum  for  Boot  Camp:  An  Iterative  Development  In Applying  OBE  In  Computer  Science  Education  for  Non-Formal Institution", category: "Publications", img: ITCurriculum, link: "https://ejournal.ust.ac.id/index.php/JTIUST/article/view/1052/pdf1", description: "" },
    { title: "Perancangan Dan Implementasi Desain Logo Di Teknokasi Menggunakan MDLC", category: "Publications", img: PerancanganLogo, link: "https://journal.uib.ac.id/index.php/nacospro/article/view/7036/2666", description: "" },
    { title: "Immersive Learning Experience pada Pembelajaran Daring dengan Penggunaan Virtual Reality", category: "Publications", img: ImmersiveLearningVR, link: "https://ejournal.ust.ac.id/index.php/JTIUST/article/view/1052/pdf1", description: "" },
    // { title: "Comming Soon", category: "Publications", img: WheatherApp, link: "/Portfolio/index.html", description: "Stay tuned exciting new projects are in development.!" },
];

const categoryDescriptions = {
    "HTML, CSS, JavaScript": "Projects built using core web technologies: HTML, CSS, and JavaScript, ensuring responsive and interactive designs.",
    "Frontend": "Interactive and responsive user interfaces crafted with modern frameworks and libraries.",
    "Backend": "Robust server-side applications ensuring seamless data management and security.",
    "FullStack": "Complete web solutions integrating frontend and backend technologies.",
    "ETL & Data Integration": "Expertise in Extract, Transform, Load (ETL) processes using Apache NiFi for efficient data extraction, transformation, and loading. Skilled in data mapping, workflow automation, and system integration to ensure seamless data flow across enterprise systems.",
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
