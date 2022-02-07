import './Projects.css'
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="project-core">
            <h1 className="shared-heading">Projects</h1>
            <p className="shared-sub-heading">abc</p>
            {/* <Container>
                <BottomNavigation className="title-center" sx={{ width: 1000 }} value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        label="Home"
                        value="home"
                        icon={<FontAwesomeIcon icon={faHome} />}
                    />
                    <BottomNavigationAction
                        label="About"
                        value="about"
                        icon={<FontAwesomeIcon icon={faAddressCard} />}
                    />
                    <BottomNavigationAction
                        label="Skills"
                        value="skills"
                        icon={<FontAwesomeIcon icon={faHome} />}
                    />
                    <BottomNavigationAction
                        label="Project"
                        value="project"
                        icon={<FontAwesomeIcon icon={faProjectDiagram} />}
                    />
                    <BottomNavigationAction
                        label="Contact"
                        value="contact"
                        icon={<FontAwesomeIcon icon={faAddressBook} />}
                    />
                </BottomNavigation>
            </Container> */}
        </div>
    );
};

export default Projects;