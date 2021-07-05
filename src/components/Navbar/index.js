import React from 'react'
import { FaBars } from 'react-icons/fa';
import { NavLogo, Nav, NavbarContainer, HamIcon, NavMenu, NavItem, NavLinks } from './elements'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>LEAP</NavLogo>
					<HamIcon>
						<FaBars/>
					</HamIcon>	
					<NavMenu>
						<NavItem>
							<NavLinks to="mission">Mission</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="design">Design</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="team">Team</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="accolades">Accolades</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
