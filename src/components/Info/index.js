import React from "react";

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
  return (
    <>
      <InfoContainer id={id} light={light}>
        <InfoWrapper>
          <InfoRow img_start={imgStart}>
            <Colomn1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading light_text={lightText}>{headline}</Heading>
                <SubTitle dark_text={darkText}>{description}</SubTitle>
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
