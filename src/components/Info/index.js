import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Colomn1,
  Colomn2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Img,
  ImgWrap,
} from "./elements";

const Info = ({
  light,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <InfoContainer id={id} light={light}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Colomn1>
              <TextWrapper>
                <TopLine data-aos-duration="1000" data-aos="fade-left">
                  {topline}
                </TopLine>
                <Heading
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  lightText={lightText}
                >
                  {headline}
                </Heading>
                <SubTitle
                  data-aos="zoom-out"
                  data-aos-duration="1000"
                  darkText={darkText}
                >
                  {description}
                </SubTitle>
              </TextWrapper>
            </Colomn1>
            <Colomn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Colomn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
