import React, { useEffect } from "react";
import Card from "../Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { aaron, brandon, christian, steven } from "./data";
import { TeamContainer, TeamWrapper, TeamH1, TopLine } from "./elements";

const Team = ({ id }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <TeamContainer id={id}>
        <TopLine data-aos-duration="1000" data-aos="fade-left">
          Our Team
        </TopLine>
        <TeamH1
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Follow Us
        </TeamH1>
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
