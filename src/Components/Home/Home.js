import './Home.css'
import React from 'react';
import Typed from 'react-typed';
import headerBg from '../images/headerBg.png'
// import Particle from '../Particle/Particle';

const Home = () => {
    return (
        <div id="home" className="header-wrapper">
            {/* <Particle /> */}
            <img src={headerBg} alt="" className="headerBg" fluid />
            <div>
                <div className="typed-text-fixed centered">
                    <p>Hi i'm <br /><span className="">Mayinuddin Munna</span></p>
                </div>
                <p className="typed typed-text centered">I'm a{' '}
                    <Typed
                        className=""
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

                {/* <a href="#contact" className="btn-main btn-centered">Contact me</a> */}
            </div>
        </div>
    );
};

export default Home;