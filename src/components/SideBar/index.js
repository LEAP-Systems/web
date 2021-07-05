import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarLink, SideBarMenu } from './elements'

const SideBar = () => {
	return (
		<SideBarContainer>
      <Icon>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="mission">Mission</SideBarLink>
          <SideBarLink to="design">Design</SideBarLink>
          <SideBarLink to="team">Team</SideBarLink>
          <SideBarLink to="accolades">Accolades</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
		</SideBarContainer>
	)
}

export default SideBar
