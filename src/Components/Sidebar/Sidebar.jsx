import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./test.css";
import { RiMailAddLine } from "react-icons/ri";
import { RxArrowTopRight } from "react-icons/rx";

const Test = () => {
  
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("/");
    }
    if (location.pathname === "/Excel") {
      setActiveItem("Excel");
    }

    if (location.pathname === "/Overview") {
      setActiveItem("Overview");
    }
    if (location.pathname === "/Insights") {
      setActiveItem("Insights");
    }
    if (location.pathname === "/Target") {
      setActiveItem("Target");
    }
  }, [location.pathname]);

  return (
    <div className="nav-sidebar">
      <div className="nav-sidebar-lists">
        <div className="nav-sidebar-list">
          <Link to="/" className={activeItem === "/" ? "active" : ""}>
            Overview
          </Link>
        </div>
        <div className="nav-sidebar-list">
          <Link to="/Excel" className={activeItem === "Excel" ? "active" : ""}>
            Update Excel
          </Link>
        </div>
        <div className="nav-sidebar-list">
          <Link
            to="/Insights"
            className={activeItem === "Insights" ? "active" : ""}
          >  
            Insights
          </Link>
        </div>
        <div className="nav-sidebar-list">
          <Link
            to="/Target"
            className={activeItem === "Target" ? "active" : ""}
          >
            Target
          </Link>
        </div>
      </div>
      <div className="nav-sidebar-info">
        <div>
          <a href="/">
            <RiMailAddLine className="nav-sidebar-info-icon" />
            Email Us for more information
          </a>
        </div>
        <div>
          <a href="/">
            <RxArrowTopRight className="nav-sidebar-info-icon" />
            Visit the site BIOCHEMZ.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Test;
