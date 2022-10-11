import styled from "styled-components";
import Particles from "react-tsparticles";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  height: 1200px;
  @media screen and (max-width: 1000px) {
    height: 1000px;
  }
  @media screen and (max-width: 768px) {
    height: 1600px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const HeroParticles = styled(Particles)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const HeroImg = styled.img`
  width: 100%;
  padding: 1%;
`;

export const HeroH1 = styled.h1`
  color: #855dd4;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 24px;
  margin-top: 24px;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
