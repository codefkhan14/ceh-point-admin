import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../Assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMyContext } from "../../context/userContext";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { hamBurger, setHamBurger } = useMyContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    if (windowWidth < 1010) {
      setHamBurger(false);
    }
  }, [location, window.innerHeight]);
  const handleSideNavBar = () => {
    setHamBurger(!hamBurger);
  };

  return (
    <div className="top-navbar">
      <div className="top-navbar-left">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="top-navbar-right">
        <i onClick={handleSideNavBar}>
          {hamBurger ? <RxCross2 /> : <RxHamburgerMenu />}
        </i>
      </div>
    </div>
  );
};

export default Header;
