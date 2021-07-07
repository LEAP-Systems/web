import React from 'react'
import { FaBars } from 'react-icons/fa';
import { NavLogo, Nav, NavbarContainer, HamIcon, NavMenu, NavItem, NavLinks } from './elements'
import logo from '../../images/LEAP_INS_WHITE.png'

const Navbar = ({toggle}) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>
            <img
              src={logo}
              alt='LEAP'
              width="60"
              height="60">
            </img>
          </NavLogo>
					<HamIcon onClick={toggle}>
						<FaBars/>
					</HamIcon>	
					<NavMenu>
						<NavItem><NavLinks to="mission">Mission</NavLinks></NavItem>
						<NavItem><NavLinks to="design">Design</NavLinks></NavItem>
						<NavItem><NavLinks to="team">Team</NavLinks></NavItem>
						<NavItem><NavLinks to="accolades">Accolades</NavLinks></NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
