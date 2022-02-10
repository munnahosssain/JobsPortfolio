import './About.css'
import img from '../images/picture.png'
import React from 'react';
import { Container } from 'react-bootstrap';
// import { Container } from '@mui/material';

const About = () => {
    return (
        <div id="about" className="about-wrapper">
            <Container >
                <h1 className="shared-heading">About Me</h1>
                <div class="row g-0 bg-light">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        <img src={img} class="w-100" alt="..." />
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                        <p className="about-top"><span className="about-top-span">Hello</span>, i am</p>
                        <h1 className="about-name fs-1 fw-bold text-black">Mayinuddin Munna</h1>
                        <h3 className="about-h3">Front End Web Developer</h3>
                        <p className="about-paragraph fs-5">I have been developing website for more then 2 years. Technologies I use ReactJs. I create responsive website that are displayed on all devices.I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript , React and Redux. I also have intermediate knowledge of Next.js Node.js, Express.js and MongoDB. So if you are looking for a front-end developer for your company, I can be the solution you're looking for. I am very much enthusiastic to show you how my experience and skills meet your needs. <br />You can <span link="" id="Contact">send email</span> directly from here or contact with me via,</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;