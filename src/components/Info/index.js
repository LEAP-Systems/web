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
  img_start,
  topline,
  light_text,
  headline,
  dark_text,
  description,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id} light={light}>
        <InfoWrapper>
          <InfoRow img_start={img_start}>
            <Colomn1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading light_text={light_text}>{headline}</Heading>
                <SubTitle dark_text={dark_text}>{description}</SubTitle>
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
