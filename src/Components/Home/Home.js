import './Home.css'
import React from 'react';
import Typed from 'react-typed';
import Fade from 'react-reveal/Fade';
import Wave from 'react-wavify';

import headerBg from '../images/headerBg.svg'

const Home = () => {
    return (
        <div className="row g-0 home-wrapper">
            <div className="col-md-6 d-flex align-items-center">
                <div className="text-area">
                    <p className="name-paragraph">Hello i am</p>
                    <p className="fs-3 fw-bold first-name p">
                        <Fade right big cascade>
                            Mayinuddin Munna
                        </Fade>
                    </p>
                    <h1 className="mb-4 text-white fw-bold h1">{' '}
                        <Typed
                            strings={[
                                "Web Designer",
                                "Web Developer",
                                "Responsive Designer",
                                "Wordpress Designer",
                            ]}
                            typeSpeed={50}
                            backSpeed={60}
                            loop={Infinity}
                            wrapper='b'
                        />
                    </h1>
                    <div className="d-flex">
                        <a href="https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1/" target="_blank" rel="noreferrer" className="social-btn btn">LinkedIn</a>
                        <a href="https://github.com/munnahosssain" target="_blank" rel="noreferrer" className="social-btn btn">gitHub</a>
                        <a href="https://github.com/munnahosssain" target="_blank" rel="noreferrer" className="social-btn btn">Resume</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 align-items-center d-flex">
                <img src={headerBg} className="img-fluid mx-auto d-block" alt="..." />
            </div>
        </div>
    );
};

export default Home;