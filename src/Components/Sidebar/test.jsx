import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./test.css"
import { RiMailAddLine } from "react-icons/ri"
import { RxArrowTopRight } from "react-icons/rx"

const Test = () => {
    const [activeItem, setActiveItem] = useState("Overview");

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className='sidebar'>
            <div className="navlist">
                <div className="page">
                    <Link to="/" className={`link ${activeItem === "Overview" && "active"}`}
                        onClick={() => handleItemClick("Overview")}>
                        <div className={`box ${activeItem === "Overview" && "box2"}`}>
                            Overview
                        </div>
                    </Link>
                </div>
                <div className="page">
                    <Link to="/Excel" className={`link ${activeItem === "Excel" && "active"}`}
                        onClick={() => handleItemClick("Excel")}>
                        <div className={`box ${activeItem === "Excel" && "box2"}`}>
                            Update Excel
                        </div>
                    </Link>
                </div>
                <div className="page">
                    <Link to="/Insights" className={`link ${activeItem === "Insights" && "active"}`}
                        onClick={() => handleItemClick("Insights")}>
                        <div className={`box ${activeItem === "Insights" && "box2"}`}>
                            Insights
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bottomSidebar">
                <a href='/' className='ab'>
                    <RiMailAddLine className='icon' />Email Us for more information
                </a>
                <a href='/' className='ab'>
                    <RxArrowTopRight className='icon' />Visit the site BIOCHEMZ.com
                </a>
            </div>
        </div>
    )
}

export default Test