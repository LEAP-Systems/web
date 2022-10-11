import React, { useCallback, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();
  }, []);
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
            <HeroImg
              data-aos="zoom-out"
              data-aos-duration="1500"
              data-aos-once="false"
              src={logo}
              alt="logo"
            ></HeroImg>
          </ImgWrap>
          <HeroH1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-once="false"
          >
            LEAP Systems
          </HeroH1>
          <HeroP1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay="200"
          >
            A Secure Multicast Light Communication Project
          </HeroP1>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
