import WheatherApp from "../../Images/WeatherApp.png";
import CompanyProfile from "../../Images/chevrolet.png";
import Stopwatch from "../../Images/Stopwatch.PNG";
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

export const rawProjects = [
    { title: "My Personal Website", category: "Web Development", img: PersonalWeb, link: "https://mejuliaveronica02.netlify.app/", description: "Another version of my personal website, now built using React.js for a more dynamic and interactive experience." },
    { title: "Weather App", category: "Web Development", img: WheatherApp, link: "/WheatherApp/index.html", description: "This portfolio project was created during my time at Impact Byte Bootcamp and utilizes the OpenWeather API." },
    { title: "Company Profile", category: "Web Development", img: CompanyProfile, link: "/companyProject/index.html", description: "Chevrolet is a company profile website that I track as part of my portfolio." },
    { title: "Personal Website", category: "Web Development", img: PersonalWeb, link: "/Responsive-Web-Design/index.html", description: "Build personal website using HTML and CSS without Bootstrap." },
    { title: "Stopwatch", category: "Web Development", img: Stopwatch, link: "/Stopwatch/index.html", description: "I developed a stopwatch using JavaScript, HTML, and CSS." },
    
    
    { title: "React Native", category: "Mobile App", img: ReactNativeStyling, link: "https://github.com/juliaveronica02/learn-react-native", description: "This project covers styling, importing images, configuring Android permissions, and using useState. Check out the project on GitHub!" },
    
    { title: "CSV to JSON", category: "ETL & Data Integration", img: CSVToJSON, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "An ETL pipeline using Apache NiFi to automate the conversion of CSV data into structured JSON format, enabling seamless data integration and transformation for backend systems." },
    { title: "CSV to XML", category: "ETL & Data Integration", img: CSVToXML, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "An ETL workflow built using Apache NiFi to automate the conversion of CSV data to XML format." },
    { title: "XML to CSV", category: "ETL & Data Integration", img: XMLToCSV, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Designed and implemented an Apache NiFi data flow to efficiently convert XML files into CSV format." },
    { title: "XML to CSV Using Evaluate XQuery", category: "ETL & Data Integration", img: XMLtoCSVEvaluateXQuery, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Developed a robust Apache NiFi data pipeline that efficiently converts XML files into CSV format using the EvaluateXQuery processor." },
    { title: "Hierarchy", category: "ETL & Data Integration", img: NifiHierarchy, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Implemented efficient data flow processing, including parsing, transformation, and validation, ensuring seamless data integration for downstream analytics and reporting." },
    { title: "Flat", category: "ETL & Data Integration", img: NifiFlat, link: "https://github.com/juliaveronica02/Nifi-Explore", description: "Developed an Apache NiFi data pipeline to automate the extraction, transformation, and loading (ETL) process, converting XML files into structured CSV format for seamless data integration." },

    { title: "Visual Memory", category: "Game Development", img: VisualMemory, link: "https://drive.google.com/drive/u/0/folders/1U0q-wORdrb_njOxPAqivLCmqszZks84w", description: "Visual memory helps children recall things they have seen before. It plays a crucial role in their ability to recognize and remember images, objects, and patterns." },
    
    { title: "Comming Soon", category: "Multimedia", img: ComingSoon, link: "/Portfolio/index.html", description: "Stay tuned exciting new projects are in development.!" },
    
    { title: "IT  Curriculum  for  Boot  Camp:  An  Iterative  Development  In Applying  OBE  In  Computer  Science  Education  for  Non-Formal Institution", category: "Publications", img: ITCurriculum, link: "https://ejournal.ust.ac.id/index.php/JTIUST/article/view/1052/pdf1", description: "" },
    { title: "Perancangan Dan Implementasi Desain Logo Di Teknokasi Menggunakan MDLC", category: "Publications", img: PerancanganLogo, link: "https://journal.uib.ac.id/index.php/nacospro/article/view/7036/2666", description: "" },
    { title: "Immersive Learning Experience pada Pembelajaran Daring dengan Penggunaan Virtual Reality", category: "Publications", img: ImmersiveLearningVR, link: "https://ejournal.ust.ac.id/index.php/JTIUST/article/view/1052/pdf1", description: "" },
];

export const categoryDescriptions = {
    "Web Development": "Projects built using core web technologies: HTML, CSS, and JavaScript, ensuring responsive and interactive designs. Complete web solutions integrating frontend and backend technologies.",
    "Mobile App": "Engaging mobile-first applications optimized for performance.",
    "ETL & Data Integration": "Expertise in Extract, Transform, Load (ETL) processes using Apache NiFi for efficient data extraction, transformation, and loading. Skilled in data mapping, workflow automation, and system integration to ensure seamless data flow across enterprise systems.",
    "Game Development": "Interactive and immersive gaming experiences.",
    "Multimedia": "Creative works blending design, animation, and interactivity.",
    "Publications": "Research-backed insights and documentation on development methodologies.",
    
    // "HTML, CSS, JavaScript": "Projects built using core web technologies: HTML, CSS, and JavaScript, ensuring responsive and interactive designs. Complete web solutions integrating frontend and backend technologies.",
    // "Frontend": "Interactive and responsive user interfaces crafted with modern frameworks and libraries.",
    // "Backend": "Robust server-side applications ensuring seamless data management and security.",
    // "FullStack": "Complete web solutions integrating frontend and backend technologies.",
    // "Start-Up": "Scalable and innovative tech solutions for emerging businesses.",
};