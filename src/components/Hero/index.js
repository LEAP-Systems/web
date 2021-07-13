import React from "react";
import logo from "../../images/LEAP_INS_WHITE.png";
import {
  HeroContainer,
  HeroBg,
  HeroH1,
  HeroContent,
  HeroP1,
  HeroImg,
  ImgWrap,
  Particle,
} from "./elements";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Particle />
        <HeroContent>
          <ImgWrap>
            <HeroImg src={logo} alt="logo"></HeroImg>
          </ImgWrap>
          <HeroH1>LEAP Systems Online</HeroH1>
          <HeroP1>A Secure Multicast Light Communication Solution</HeroP1>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
