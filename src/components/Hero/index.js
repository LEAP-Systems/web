import React, { useCallback } from "react";
import logo from "../../images/LEAP_INS_WHITE.png";
import {
  HeroContainer,
  HeroH1,
  HeroContent,
  HeroP1,
  HeroImg,
  ImgWrap,
  HeroParticles,
} from "./elements";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <>
      <HeroContainer id="hero">
        <HeroParticles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              size: {
                value: { min: 0.1, max: 2 },
              },
              opacity: {
                value: 0.1,
              },
            },
          }}
        />
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
