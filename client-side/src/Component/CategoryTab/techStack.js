import React, { useState } from "react";

const techStacks = {
    "Multimedia": [
        "Adobe Photoshop CS6", "Adobe XD", "Adobe Audition CS6", "Adobe Lightroom", "Adobe Illustrator CS6", "Adobe After Effect CS6", 
        "Adobe Premier CS6", "Autodesk Maya 2015", "Blender 3d", "Canva", "Figma"
    ],
    "Programming": [
        "DigitalOcean", "GithubPages", "Heroku", "Netlify", "Chart.js", "Express.js", "JWT", "NPM", "NodeJS", "PHP",
        "React", "VUEJS", "React Hook Form", "Redux", "TailwindCSS", "MaterialDesignIcon", "WordPress", "Yarn", "Unity 2d/3d",
        "ApacheNiFi", "Nginx", "AWS-S3", "MongoDB", "MySQL", "Postgres", "SQYOG", "GitHub", "GitLab", "Postman",
        "Notion", "Coda", "ESLint", "Twilio"
    ]
};

const TechStackTabs = () => {
    const [selectedStack, setSelectedStack] = useState("Programming");

    return (
        <div className="container mt-100 mt-60 text-center">
            <h4 className="title text-uppercase mb-3">Tech Stack 💻</h4>

            {/* Tabs for selecting Multimedia or Programming */}
            <div className="d-flex justify-content-center mb-3">
                {Object.keys(techStacks).map((stack) => (
                    <button
                        key={stack}
                        className={`btn mx-2 ${selectedStack === stack ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setSelectedStack(stack)}
                    >
                        {stack}
                    </button>
                ))}
            </div>

            {/* Tech Stack List */}
            <div className="d-flex flex-wrap justify-content-center">
                {techStacks[selectedStack].map((tech, index) => (
                    <span key={index} className="badge bg-secondary m-1 p-2">{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default TechStackTabs;