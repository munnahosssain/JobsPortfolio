import './Skills.css'
import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faPaintBrush, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';

const languages = [
    {
        id: 1,
        title: 'HTML 5',
        now: 90,
    },
    {
        id: 2,
        title: 'CSS3',
        now: 85,
    },
    {
        id: 3,
        title: 'SCSS',
        now: 70,
    },
    {
        id: 4,
        title: 'JavaScript',
        now: 70,
    },
    {
        id: 5,
        title: 'React Js',
        now: 75,
    },
    {
        id: 6,
        title: 'C++',
        now: 70,
    },
    {
        id: 7,
        title: 'OOP',
        now: 60,
    },
    {
        id: 8,
        title: 'Node.js',
        now: 60,
    },
    {
        id: 9,
        title: 'MongoDB',
        now: 70,
    },
]
const cardInfo = [
    {
        id: 1,
        title: 'Web Design',
        img: faDesktop,
        details: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
        id: 2,
        title: 'Web Development',
        img: faCode,
        details: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    },
    {
        id: 3,
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
                            languages.map(language =>
                                <div key={language.id}>
                                    <p className="share-skill">{language.title}</p>
                                    <ProgressBar variant="success" now={language.now} label={`${''}`} />
                                </div>
                            )
                        }
                    </div>
                    <div className="col-md-6 mt-4">
                        {
                            cardInfo.map((info) =>
                                <div className="row g-2 mt-4 skill-card">
                                    <div className="col-md-4 skills-icon">
                                        <FontAwesomeIcon icon={info.img} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{info.title}</h5>
                                            <p className="card-text">{info.details}</p>
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