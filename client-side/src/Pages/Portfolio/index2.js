import React, { useState } from "react";
import { rawProjects, categoryDescriptions } from "./data";
import CategoryTabs from "../../Component/CategoryTab/index";
import TechStack from "../../Component/CategoryTab/techStack";
import ProjectSlider from "../../Component/Slider/index";

const generateProjectsWithIds = (projects) => {
    const categoryMap = {};
    return projects.map((project) => {
        categoryMap[project.category] = (categoryMap[project.category] || 0) + 1;
        return { ...project, id: categoryMap[project.category] };
    });
};

const projects = generateProjectsWithIds(rawProjects);

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("HTML, CSS, JavaScript");
    const [startIndex, setStartIndex] = useState(0);
    const categories = [...new Set(projects.map((project) => project.category))];

    const filteredProjects = projects.filter(project => project.category === selectedCategory);
    const maxVisible = 6; 

    return (
        <section className="section bg-light" id="expertise">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">Recent Works</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Explore my diverse portfolio showcasing projects across multiple categories, including Frontend, Backend, Full Stack Development, Mobile Apps, Game Development, Multimedia, Start-Ups, and Publications. I specialize in creating dynamic, user-friendly applications, leveraging various technologies such as HTML, CSS, JavaScript, React.js, Node.js, and more.</p><br />
                            <p className="text-muted mx-auto para-desc mb-0">
                                {categoryDescriptions[selectedCategory] || "Explore projects in this category."}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <CategoryTabs
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    maxVisible={maxVisible}
                />

                {/* Project Slider */}
                <ProjectSlider projects={filteredProjects} />

                <TechStack/>
            </div>
        </section>
    );
};

export default Portfolio;