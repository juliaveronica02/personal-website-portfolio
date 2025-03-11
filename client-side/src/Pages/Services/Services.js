import React from 'react';
import '../../Styling/Service.css'

const Services = () => {
    return (
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">What Do I Offer?</h4>
                            <p className="text-muted mx-auto para-desc mb-0">I am experienced with all
                                stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="airplay" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Complex applications</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Hands-on experience in developing and maintaining large-scale backend systems for logistics and supply chain management. Expertise in integrating Warehouse Management Systems (WMS) with CargoWise and SAP.
                                    </p>

                                </div>
                                <div className="big-icon">
                                    <i data-feather="airplay" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="aperture" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Technology stack</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Broad familiarity with backend and frontend technologies, including Java, JavaScript, TypeScript, SQL, NoSQL, C#, and PHP, covering the full application stack.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="aperture" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="skip-back" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Backend languages & Frameworks</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Proficient in PHP (pure PHP without frameworks), Java Quarkus, ExpressJS, NodeJS, and ASP.Net Core. Experience building APIs, backend services, and handling business logic for various applications.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="camera" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="skip-forward" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Frontend frameworks</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Experience working with HTML, CSS, JavaScript, React.js, and Vuejs to develop interactive user interfaces. Translated UI/UX designs from Figma into frontend implementations.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="compass" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="skip-forward" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Enterprise Software Development</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Developed and maintained backend features using pure PHP and MySQL, contributing to new module implementations for the company’s software solutions.
                                        {/* Worked on debugging, troubleshooting, and improving application performance. */}
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="compass" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="settings" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Development lifecycle</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Experienced in Agile-driven workflows, including Scrum methodologies, daily stand-ups, sprint planning, and documentation using tools like Google Sheets and Plane.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="settings" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="settings" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Mentoring & Collaboration</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Ability to quickly learn the job (with mentoring from others) best practices. Effective in working independently and within cross-functional teams, collaborating with business analysts, UI/UX designers, and developers.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="settings" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Data Integration & ETL</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Expertise in Apache NiFi for efficient data extraction, transformation, and loading (ETL) processes. Strong background in data mapping and database management.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">System Integration</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Experience integrating third-party APIs, warehouse management systems, and logistics AI solutions. Strong ability to work across backend and frontend teams to ensure seamless integration.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Cloud & DevOps</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Experience with Dockerized applications, AWS S3 for cloud storage, and version control using Git and GitHub.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Security & Authentication</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Developed secure user authentication and authorization mechanisms using industry-standard protocols and libraries.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Testing & Debugging</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Proficient in API testing with Postman and Swagger, and unit testing using JUnit in Java Quarkus. Debugged PHP applications and optimized queries in SQL Yog/MySQL.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Multimedia & UI Design</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Background in multimedia design, with experience using Adobe Photoshop, Adobe Illustrator, CorelDraw and Figma + Adobe XD for UI/UX projects.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Game Development</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Developed interactive learning simulations using Unity and C#, focusing on game logic, physics, and user interaction.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Animation</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Proficient in 2D/3D animation, motion graphics, and multimedia production using Adobe After Effects, Adobe Flash, Autodesk Maya, and Blender.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Photography Editing</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Experienced in professional photography techniques, including camera settings, lighting, and composition. Skilled in photo editing using Adobe Lightroom and Photoshop for retouching, color correction, and advanced image manipulation.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div data-aos="fade-up" data-aos-duration="600">
                            <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pb-5" style={{alignContent: 'center'}}>
                                <div className="icon" style={{ color: '#f89d36' }}>
                                    <i data-feather="watch" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Video Editing</h5>
                                    <p className="text-muted mt-3 mb-0">
                                        Proficient in video editing and post-production using Adobe Premiere Pro, specializing in storytelling and cinematic effects. Skilled in audio editing with Adobe Audition and creating motion graphics & special effects using Adobe After Effects for enhanced visual content.
                                    </p>
                                </div>
                                <div className="big-icon">
                                    <i data-feather="watch" className="fea icons"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services;