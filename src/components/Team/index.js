import React from "react";
import Card from "../Card";
import { aaron, brandon, christian, steven } from "./data";
import { TeamContainer, TeamWrapper, TeamH1, TopLine } from "./elements";

const Team = ({ id }) => {
  return (
    <>
      <TeamContainer id={id}>
        <TopLine>Our Team</TopLine>
        <TeamH1>Research & Development</TeamH1>
        <TeamWrapper>
          <Card {...christian} />
          <Card {...brandon} />
          <Card {...steven} />
          <Card {...aaron} />
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default Team;
