import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './elements'

const Sidebar = ({open, toggle}) => {
	return (
		<SidebarContainer open={open} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mission" onClick={toggle}>Mission</SidebarLink>
          <SidebarLink to="design" onClick={toggle}>Design</SidebarLink>
          <SidebarLink to="accolades" onClick={toggle}>Accolades</SidebarLink>
          <SidebarLink to="team" onClick={toggle}>Team</SidebarLink>
          <SidebarLink to="recruit" onClick={toggle}>Join</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar
