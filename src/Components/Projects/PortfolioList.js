import './Projects.css';
import React from 'react';

const PortfolioList = ({ title, active, setSelect, id }) => {
    return (
        <div>
            <li className={active ? "portfolioList activee" : "portfolioList"}
                onClick={() => setSelect(id)
                }>
                {title}
            </li>
        </div>
    );
};

export default PortfolioList;