import './Footer.css'
import logo from '../images/LOGO.png'
import React from 'react';
import { Image, Nav } from 'react-bootstrap';

import facebook from '../images/facebook.png';
import github from '../images/github.png';
import google from '../images/google.png';
import skype from '../images/skype.png';
import linkedin from '../images/linkedin.png';

const iconList = [
    {
        icon: facebook,
        url: '',
    },
    {
        icon: github,
        url: '',
    },
    {
        icon: skype,
        url: '',
    },
    {
        icon: linkedin,
        url: '',
    },
    {
        icon: google,
        url: '',
    },
]

const Footer = () => {
    return (
        <div className="footer-main">
            <Image src={logo} className="footer-logo" /> <br />
            {
                iconList.map((icons) =>
                    <Image src={icons.icon} className="social-icon" />
                )
            }
            <br />
            <small className="footer-text">© 2022 MUNNA - ALL RIGHTS RESERVED</small>
        </div>
    );
};

export default Footer;