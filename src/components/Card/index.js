import React from "react";

import { CardContainer, CardH2, CardIcon, CardP } from "./elements";

const Card = ({ src, alt, header, description, link }) => {
  return (
    <>
      <CardContainer href={link}>
        <CardIcon src={src} alt={alt} />
        <CardH2>{header}</CardH2>
        <CardP>{description}</CardP>
      </CardContainer>
    </>
  );
};

export default Card;
