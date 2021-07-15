import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  NavLogo,
  Nav,
  NavbarContainer,
  HamIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./elements";
import logo from "../../images/LEAP_INS_WHITE.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="LEAP" width="60" height="60"></img>
          </NavLogo>
          <HamIcon onClick={toggle}>
            <FaBars />
          </HamIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="mission"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Mission
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="design"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Design
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="accolades"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Accolades
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="recruit"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Join
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
