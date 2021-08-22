import React from "react";
import { FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  External,
  ExternalWrapper,
  Icons,
  IconLink,
  WebsiteRights,
  Home,
  Logo,
} from "./elements";
import logo from "../../images/LEAP_INS_WHITE.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Services</FooterLinkTitle>
                <FooterLink href="https://github.com/LEAP-Systems/web/issues/new">
                  Report Issue
                </FooterLink>
                <FooterLink href="mailto:christian@leapsystems.online">
                  Contact Us
                </FooterLink>
                <FooterLink href={"/"}>Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Media</FooterLinkTitle>
                <FooterLink href={"https://youtu.be/aiTprGXODSQ"}>
                  Promotional Video
                </FooterLink>
                <FooterLink
                  href={
                    "https://carleton.ca/sce/2020/systems-capstone-project-won-the-w-e-cowie-innovation-award/"
                  }
                >
                  Cowie Innovation Award
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <External>
            <ExternalWrapper>
              <Home to="/" onClick={toggleHome}>
                <Logo src={logo} alt="LEAP" width="80" height="80"></Logo>
              </Home>
              <WebsiteRights>
                LEAP Systems © {new Date().getFullYear()}. All Rights Reserved
              </WebsiteRights>
              <Icons>
                <IconLink
                  href="https://discord.gg/vEdPyVk"
                  target="_blank"
                  aria-label="Discord"
                >
                  <FaDiscord />
                </IconLink>
                <IconLink
                  href="https://github.com/LEAP-Systems"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </IconLink>
                <IconLink
                  href="https://youtu.be/aiTprGXODSQ"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </IconLink>
              </Icons>
            </ExternalWrapper>
          </External>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
