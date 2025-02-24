import React, { Component } from 'react';
import { ReactTyped } from "react-typed";
import About from "./About"
import Services from '../Services/Services'
import Resume from '../Resume/Resume'
import ProfileImg from '../../Images/1.jpeg'
import BackgroundImg from '../../Images/3.jpg'
import '../../Styling/Content.css';

export default class Jumbotron extends Component {
    componentDidMount() {
        if (window.AOS) {
            window.AOS.init({
                duration: 1000,
                once: false, // Change to true if you want it to animate only once
                mirror: true, // Allow animation to re-trigger on scroll
            });
    
            // Ensure elements are detected
            setTimeout(() => window.AOS.refreshHard(), 300);
        }
    }

    render() {
        return (
            <>
            <section className="bg-home d-table w-100" 
                style={{ backgroundImage: `url(${BackgroundImg})` }}
                id="home">
                <div className="bg-overlay bg-over-image"></div>
                
                <a id="video" className="player"
                   data-property='{"videoURL":"https://www.youtube.com/watch?v=m5wisWO8TSA",
                   "containment":"#home","showControls":false, "autoPlay":true, "loop":true,
                   "mute":true, "startAt":0, "opacity":1, "optimizeDisplay":true, "useOnMobile":false, 
                   "realfullscreeen":true}'>
                </a>
                
                <div className="container">
                    <div className="row mt-5 mt-sm-0 justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="title-heading">
                                <div data-aos="fade"
                                    data-aos-delay="100"
                                    data-aos-duration="1500"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="top-bottom">
                                    <img src={ProfileImg}
                                         className="img-fluid rounded-circle" 
                                         alt="Julia Veronica profile photo"/>
                                </div>
                                
                                <div data-aos="fade-up" data-aos-duration="1100" data-aos-delay="700" data-aos-mirror="true"
                                    data-aos-once="false" data-aos-anchor-placement="top-bottom">
                                    <h1 className="heading text-primary mt-3">Julia Veronica</h1>
                                </div>
                                
                                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="700" data-aos-mirror="true"
                                    data-aos-once="false" data-aos-anchor-placement="top-bottom">
                                    <h6 className="sub-title text-light">
                                        I am a Passionate <span className="simple-text-rotate text-primary">
                                        <ReactTyped strings={["Full-Stack Web Developer"]} style={{color: '#f89d36'}} typeSpeed={100} loop />
                                        </span>
                                    </h6>
                                </div>
                                
                                <div data-aos="fade" data-aos-duration="1600" data-aos-delay="1600" data-aos-mirror="true"
                                    data-aos-once="false" data-aos-anchor-placement="top-bottom">
                                    <div className="mt-4">
                                        <a href="#contact" className="btn btn-primary rounded mb-2 mouse-down" style={{marginRight:'0.5rem', background: '#f89d36', borderColor: '#f89d36'}}>Contact me</a>
                                        <a href="#resume" className="btn btn-outline-primary rounded mb-2 mouse-down" style={{color: '#f89d36',borderColor: '#f89d36'}}>Check my Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="#about" data-scroll-nav="1" className="mouse-icon mouse-icon-white rounded-pill bg-transparent mouse-down">
                    <span className="wheel position-relative d-block mover"></span>
                </a>
            </section>
            <About/>
            <Services/>
            <Resume/>
            </>
        );
    }
}