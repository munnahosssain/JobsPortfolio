import './About.css'
import img from '../images/picture.png'
import React from 'react';
import { Card, CardMedia, Container } from '@mui/material';
import { faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className="about">
            <div className="about-wrapper App-heade">
                <Container className="about-container">
                    <h1 className="about-title">About Me</h1>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            className="about-img"
                            component="img"
                            sx={{ width: 600 }}
                            image={img}
                            alt="Live from space album cover"
                        />
                        {/* <Box> */}
                        <div className="about-text">
                            <p className="about-top"><span className="about-top-span">Hello</span>, i'am</p>
                            <h1 className="about-name">Mayinuddin Munna</h1>
                            <h3 className="about-h3">Front End Web Developer</h3>
                            <p className="about-paragraph">I have been developing website for more then 1 year. Technologies I use ReactJs. I create responsive website that are displayed on all devices.I have the ability to write semantic, cross-browser compatible, clean code by hand that is re-useable, maintainable, and easy to understand. The main areas of my expertise are HTML, CSS, Bootstrap, JavaScript , React and Redux. I also have intermediate knowledge of Next.js Node.js, Express.js and MongoDB. So if you are looking for a front-end developer for your company, I can be the solution you're looking for. I am very much enthusiastic to show you how my experience and skills meet your needs.</p>
                            <p className="about-paragraph">You can send email directly from here or contact with me via,</p>

                            <p text="number"><FontAwesomeIcon icon={faPhoneAlt} /> 01572394249 || 01988545311</p>
                            <p><FontAwesomeIcon icon={faPaperPlane} /> mayinuddin.munna@gmail.com</p>

                        </div>
                        {/* </Box> */}
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default About;