import './Skills.css'
import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faPaintBrush, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';

const languages = [
    {
        title: 'HTML 5',
        now: 90,
    },
    {
        title: 'CSS3',
        now: 85,
    },
    {
        title: 'SCSS',
        now: 70,
    },
    {
        title: 'JavaScript',
        now: 70,
    },
    {
        title: 'React Js',
        now: 75,
    },
    {
        title: 'C++',
        now: 70,
    },
    {
        title: 'OOP',
        now: 60,
    },
    {
        title: 'Node.js',
        now: 60,
    },
    {
        title: 'MongoDB',
        now: 70,
    },
]
const cardInfo = [
    {
        title: 'Web Design',
        img: faDesktop,
        details: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
        title: 'Web Development',
        img: faCode,
        details: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
        title: 'Responsive Design',
        img: faWindowRestore,
        details: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
]

const Skills = () => {
    return (
        <div id="skill" className="skills">
            <Container>
                <h1 className="shared-heading">My Skills</h1>
                <p className="shared-sub-heading">I love what I do. I take great pride in what I do.</p>
                <div className="row">
                    <div className="col-md-6">
                        {
                            languages.map(lng => <div>
                                <p className="share-skill">{lng.title}</p>
                                <ProgressBar variant="success" now={lng.now} label={`${''}`} />
                            </div>)
                        }
                    </div>
                    <div className="col-md-6 mt-4">
                        {
                            cardInfo.map((info) =>
                                <div class="row g-2 mt-4 skill-card">
                                    <div class="col-md-4 skills-icon">
                                        <FontAwesomeIcon icon={info.img} />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{info.title}</h5>
                                            <p class="card-text">{info.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;