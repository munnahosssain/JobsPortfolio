import './Projects.css'
import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
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
            <Paper  sx={{ position: '', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation sx={{ width: 1000 }} value={value} onChange={handleChange}>
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
            </Paper>
        </div>
    );
};

export default Projects;