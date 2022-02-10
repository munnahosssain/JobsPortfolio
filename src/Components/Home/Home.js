import './Home.css'
import React from 'react';
import Typed from 'react-typed';
import headerBg from '../images/tableCode.png'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div id="home" className="row g-0 home-wrapper">
            <div className="col-md-6">
                <div className="name-typed">
                    <p className="name-paragraph">Hello i am</p>
                    <p className="fs-2 fw-bold first-name">
                        <Fade right big cascade>
                            Mayinuddin Munna
                        </Fade>
                    </p>
                    <p className="fixed-name"><span className="name">I'm</span> a{' '}
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
                    </p>
                    <div className="d-flex">
                        <a href="https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1/" target="_blank" rel="noreferrer" className="social-btn btn">LinkedIn</a>
                        <a href="https://github.com/munnahosssain" target="_blank" rel="noreferrer" className="social-btn btn">gitHub</a>
                        <a href="https://github.com/munnahosssain" target="_blank" rel="noreferrer" className="social-btn btn">Resume</a>
                    </div>
                </div>
                <a href="d" className="pointer" >{' '}</a>
            </div>
            <div className="col-md-6">
                <img src={headerBg} class="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default Home;