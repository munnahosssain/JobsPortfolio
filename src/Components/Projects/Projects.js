import './Projects.css'
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faDesktop, faIceCream } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div id="projects" className="project-core">
            <h1 className="shared-heading">Projects</h1>
            <p className="shared-sub-heading">I believes in the power of creative ideas and great design.</p>
            <Container>
                <BottomNavigation className="title-center" sm={{ width: 270 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Web Design"
                        value="home"
                        icon={<FontAwesomeIcon icon={faDesktop} />}
                    />
                    <BottomNavigationAction
                        label="Vanila Js"
                        value="about"
                        icon={<FontAwesomeIcon icon={faIceCream} />}
                    />
                    <BottomNavigationAction
                        label="APIs"
                        value="skills"
                        icon={<FontAwesomeIcon icon={faCogs} />}
                    />
                    <BottomNavigationAction
                        label="React"
                        value="project"
                        icon={<FontAwesomeIcon icon={faCode} />}
                    />
                </BottomNavigation>
            </Container>
        </div>
    );
};

export default Projects;