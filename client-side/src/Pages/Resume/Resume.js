import React from 'react';
import '../../Styling/Resume.css'
import '../../Styling/Service.css'

const Resume = () => {
    return (
        <section className="section" id="resume">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-line text-uppercase mb-4 pb-4">Work Participation</h4>
                            <p className="text-muted mx-auto para-desc mb-0">
                                I have been working on the design and development of a broad spectrum of projects.
                            </p>
                        </div>
                    </div>
                </div>

                Comming Soon <br/> Stay tuned exciting journey's are in development.!

                {/* <div className="row">
                    <div className="col-12">
                        <div className="main-icon rounded-pill text-center mt-4 pt-2">
                            <i data-feather="star" className="fea icon-md-sm"></i>
                        </div>
                        <div className="timeline-page pt-2 position-relative">
                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Oct 2023 - Present
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://www.cognizant.com" target="_blank">
                                                <div className="event event-description-right rounded p-4 border float-left text-start">
                                                    <h5 className="title mb-0 text-capitalize">Technical Lead</h5>
                                                    <small className="company">Cognizant</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        European Payment Gateways <br /><br />

                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://www.devbridge.com/" target="_blank">
                                                <div className="event event-description-left rounded p-4 border float-left text-start">
                                                    <h5 className="title mb-0 text-capitalize">Senior Software Engineer</h5>
                                                    <small className="company">Devbridge</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Financial & SEC Reporting Software. <br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Design and develop Backend microservices in Java/Node.js and
                                                                Frontend in React;
                                                            </li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Conduct the technical interviews;</li>
                                                            <li>Mentor less experienced team members;</li>
                                                            <li>Design of API specification and database structure;</li>
                                                            <li>Ensure application performance, quality, clean code, and
                                                                responsiveness.
                                                            </li>
                                                        </ul>

                                                        <p>
                                                            Backend stack: Java 17, Spring Boot 3, MyBatis, Docker,
                                                            Kubernetes, PostgreSQL, RabbitMQ
                                                        </p>
                                                        <p className="mb-0">
                                                            Frontend stack: React, Lerna, Redux-Saga
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Jan 2021 - Sept 2023
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Sep 2019 - Dec 2020
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://www.marviq.com" target="_blank">
                                                <div className="event event-description-right rounded p-4 border float-left text-left">
                                                    <h5 className="title mb-0 text-capitalize">Technical Lead</h5>
                                                    <small className="company">Marviq</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Web and Mobile platform for frontline workers. <br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Lead a team of 4 developers;</li>
                                                            <li>Design and develop Backend microservices in Java and
                                                                Frontend/Mobile applications in Ionic with Angular;
                                                            </li>
                                                            <li>Conduct the technical interviews;</li>
                                                            <li>Design of API specification and database structure.</li>
                                                        </ul>

                                                        <p>
                                                            Backend stack: Java 11, Spring Boot 2, Hibernate 5, Spock,
                                                            Liquibase, MySQL, Docker
                                                        </p>
                                                        <p className="mb-0">
                                                            Frontend stack: Ionic 5, Angular 9, Angular Material 9,
                                                            Angular
                                                            Flex-Layout 9
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://apreel.com/" target="_blank">
                                                <div className="event event-description-left rounded p-4 border float-left text-start">
                                                    <h5 className="title mb-0 text-capitalize">Senior Full-Stack Engineer</h5>
                                                    <small className="company">Apreel</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Web platform for a British insurance company - Aviva. <br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Design and develop Backend service in Java with Spring and Hibernate and Frontend in Angular;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Mentor less experienced team members;</li>
                                                            <li>Ensure application performance, quality, clean code, and responsiveness;</li>
                                                            <li>Take part in software and architectural development activities.</li>
                                                        </ul>

                                                        <p>
                                                            Backend stack: Java 8, Spring Boot, Hibernate, JBoss, Gradle,
                                                            PostgreSQL
                                                        </p>
                                                        <p className="mb-0">
                                                            Frontend stack: Angular 6, Angular Material, Angular
                                                            Flex-Layout
                                                        </p>

                                                        <br />

                                                        Mobile application for a Polish insurance company - Warta.<br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Design and develop Backend service in Java with Spring and Hibernate;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Mentor less experienced team members.</li>
                                                        </ul>

                                                        <p className="mb-0">
                                                            Technologies: Java 8, Spring Boot, Hibernate, Apache Tomcat,
                                                            PostgreSQL
                                                        </p>

                                                        <br />

                                                        Web platform for a Polish insurance company - Warta. <br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Design and develop Backend service in Kotlin with Spring and Hibernate and Frontend in Angular;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Mentor less experienced team members.</li>
                                                        </ul>
                                                        <p>
                                                            Backend stack: Kotlin, Spring Boot, Hibernate, IBM Informix
                                                        </p>
                                                        <p className="mb-0">
                                                            Frontend stack: AngularJS, Angular Material
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Jul 2015 - Sep 2019
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Dec 2014 - May 2015
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://asseco.com/" target="_blank">
                                                <div className="event event-description-right rounded p-4 border float-left text-left">
                                                    <h5 className="title mb-0 text-capitalize">Java Software Engineer</h5>
                                                    <small className="company">Infovide-Matrix</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Web platform for an insurance company - Gothaer.<br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Develop Backend service in Java and Frontend in Thymeleaf;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Take part in software and architectural development activities.</li>
                                                        </ul>

                                                        <p>Backend stack: Java 7, Spring, Hibernate, Oracle,
                                                            WebSphere</p>
                                                        <p className="mb-0">Frontend stack: Apache Struts, Apache Tiles</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://www.comp.com.pl/" target="_blank">
                                                <div className="event event-description-left rounded p-4 border float-left text-start">
                                                    <h5 className="title mb-0 text-capitalize">Java Software Engineer</h5>
                                                    <small className="company">Comp S.A.</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Self-service machine for Polish Post - Poczta Polska.<br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Implement Backend service in Java and Frontend in JavaFX with Spring;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Identify and fix production and non-production application issues.</li>
                                                        </ul>

                                                        <p className="mb-0">Technologies: Java FX, Spring, MyBatis, PostgreSQL,
                                                            WebServices, RMI,
                                                            JNA</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Sep 2013 - Nov 2014
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item mt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                                            Jun 2012 - Jan 2013
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div data-aos="fade-up" data-aos-duration="1000">
                                            <a href="https://www.linkedin.com/company/luckyit/" target="_blank">
                                                <div className="event event-description-right rounded p-4 border float-left text-left">
                                                    <h5 className="title mb-0 text-capitalize">Java Software Engineer</h5>
                                                    <small className="company">Luckyit</small>
                                                    <div className="timeline-subtitle mt-3 mb-0 text-muted">
                                                        Driver's license test application in categories: A, B, and C.
                                                        <br /><br />

                                                        Key responsibilities:
                                                        <ul>
                                                            <li>Design, implement, and maintain a Java desktop application that allows preparing for a driving license test;</li>
                                                            <li>Test software through unit and integration tests;</li>
                                                            <li>Transform requirements into stipulations.</li>
                                                        </ul>

                                                        <p className="mb-0">Technologies: Java, Swing, Maven, VLCJ, iText,
                                                            Jasypt</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Resume;
