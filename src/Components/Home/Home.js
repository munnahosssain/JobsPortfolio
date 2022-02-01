import './Home.css'
import React from 'react';
import Typed from 'react-typed';
import headerBg from '../images/tableCode.png'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div className="black mb-3">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="name-typed">
                        <p className="name-paragraph">Hello i am</p>
                        <h1 className="name first-name">
                            <Fade right big cascade>
                                Mayinuddin Munna
                            </Fade>
                        </h1>
                        <p className="fixed-name"><span className="name">I'm a</span>{' '}
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
                        <div>
                            <a href="https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1/" target="_blank" className="social-btn">Linked In</a>
                            <a href="https://github.com/munnahosssain" target="_blank" className="social-btn">gitHub</a>
                            <a href="https://github.com/munnahosssain" target="_blank" className="social-btn">Resume</a>
                        </div>
                    </div>
                    <a href="d" className="pointer" >{' '}</a>
                </div>
                <div className="col-md-6">
                    <img src={headerBg} class="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Home;