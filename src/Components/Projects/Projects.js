import './Projects.css'
import PortfolioList from './PortfolioList';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { design, vanillaJs, APIs, reactJs } from './ProjeceData'

const Projects = () => {

    const [select, setSelect] = useState([]);
    const [data, setData] = useState([]);

    const navList = [
        {
            id: "webDesign",
            title: "Design",
        },
        {
            id: "javascript",
            title: "VanilaJs",
        },
        {
            id: "Api",
            title: "APIs",
        },
        {
            id: "react",
            title: "ReactJs",
        },
    ];

    useEffect(() => {
        switch (select) {
            case "webDesign":
                setData(design);
                break;
            case "javascript":
                setData(vanillaJs);
                break;
            case "Api":
                setData(APIs);
                break;
            case "react":
                setData(reactJs);
                break;
            default:
                setData(design);
        }
    }, [select])

    return (
        <div id="projects" className="project-core">
            <h1 className="shared-heading">Projects</h1>
            <p className="shared-sub-heading">I believes in the power of creative ideas and great design.</p>
            <div className="portfolio">
                <ul>
                    {
                        navList.map(lists => <PortfolioList
                            title={lists.title}
                            active={select === lists.id}
                            setSelect={setSelect}
                            id={lists.id}
                            key={lists.id}
                        />)
                    }
                </ul>
                <div className="portfolio-container">
                    {
                        data.map((data) => (
                            <div className="items">
                                <img className="img-wrapping" src={data.img} alt="" />
                                <p className="portfolio-title">{data.title}</p>
                                <button className="portfolio-title">souece</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;