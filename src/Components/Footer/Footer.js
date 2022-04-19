import './Footer.css'
import logo from '../images/LOGO.png'
import React from 'react';
import { Image } from 'react-bootstrap';

import facebook from '../images/facebook.png';
import github from '../images/github.png';
import google from '../images/google.png';
import skype from '../images/skype.png';
import linkedin from '../images/linkedin.png';
import ScrollToTop from 'react-scroll-to-top';

const iconList = [
    {
        id:1,
        icon: facebook,
        url: 'https://www.facebook.com/people/Mayinuddin-Munna/100073611545089/',
    },
    {
        id:2,
        icon: github,
        url: 'https://github.com/munnahosssain',
    },
    {
        id:3,
        icon: skype,
        url: 'https://join.skype.com/invite/Q1ajR6vuVWYD',
    },
    {
        id:4,
        icon: linkedin,
        url: 'https://www.linkedin.com/in/mayinuddin-munna-b8b9541a1/',
    },
    {
        id:5,
        icon: google,
        url: 'https://myaccount.google.com/?tab=kk&hl=en',
    },
]

const Footer = () => {
    return (
        <div className="footer-main">
            <ScrollToTop smooth="true" top="300" color="white" style={{ borderRadius: 50, backgroundColor: '#023430' }} />
            <a href = "/"><Image src={logo} className="footer-logo" /></a><br />
            {
                iconList.map((icons) =>
                <a href = {icons.url}>
                    <Image src={icons.icon} link="" className="social-icon" />
                </a>
                )
            }
            <br />
            <small className="footer-text">© 2022 MUNNA - ALL RIGHTS RESERVED</small>
        </div>
    );
};

export default Footer;