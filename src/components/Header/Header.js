import "./Header.css"
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

// App.js
import AnchorLink from "react-anchor-link-smooth-scroll";



const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  function getMenuStyles(menuOpen) {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpen && "-100%"
      }
    }
  }
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => { setmenuOpen(false) }}>

          <div className=" flexCenter h-menu" style={getMenuStyles(menuOpen)}>
           
            <AnchorLink href='#Residencies'>  Residencies</AnchorLink>

            <AnchorLink href='#Value' >Our Value</AnchorLink>
            <AnchorLink href="#Contact" >Contact Us</AnchorLink>
            <AnchorLink href="#footer" >Get Started</AnchorLink>
            <button className="button">
              <AnchorLink href="#Contact">Contact</AnchorLink>
            </button>

          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setmenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={40} />
        </div>
      </div>

    </section>
  );
};

export default Header;
