import React, { Component } from "react";
import { Container } from "react-bootstrap";

class MissionContent extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners"
        >
          <section id="mission">
            <h3 class="header">Mission</h3>
            <p>
              On May 6th 2017, The Economist declared that the world's most
              valuable resource is no longer oil but instead information. It has
              been a trend since 2016 that the top ten market cap holders
              consist almost exclusively of information tech companies. This
              includes multinational conglomerate constituents who are now also
              absent of oil driven businesses. The radical market shift towards
              data harvesting and internet advertising means that data security
              is more important now than ever before.
            </p>
            <p>
              Data security begins with the underlying network technology.
              According to the Massachusetts Broadband Institute the common
              broadband network technologies in North America consist of digital
              subscriber line, cable modem, fibre optic, fixed/mobile wireless
              and satellite. These technologies use wire or radio spectrum which
              are insecure forms of data transmission and are susceptible to
              network taps . To transfer data securely, these networks must
              employ data encryption . However, encryption algorithms have
              increasingly shorter half-lives due to recent advances in computer
              processing. Encryption alone is not a reliable solution for
              securing data.
            </p>
            <p>
              Light fidelity (LiFi) is an emerging technology which uses light
              as a communication medium rather than radio or cable6 . Current
              LiFi technologies are short-range baseband broadcast communication
              networks which operate by flickering a light emitting diode (LED)
              many times per second to transmit data to a photoreceiver which
              captures the light and converts it to readable data. LiFi operates
              in unregulated spectrum making it is inexpensive to operate and
              also providing stable transmission streams with less interference.
              This is due to available wide bandwidth channels as compared to
              traditional satellite or radio.
            </p>
            <p>
              Most importantly, LiFi allows for naturally secure transmission
              since light is contained to receivers operating within the
              line-of-sight (LoS) of the transmitter. However, broadcast
              networks are imperfect as a network tap can still operate within
              the LoS. The purpose of this project is to solve this problem by
              integrating point-to-multipoint (P2MP) communication using
              specially designed embedded systems for LiFi transmission and
              reception. Finally, the technology will be accompanied by
              redesigned network protocols and addressing methods from a
              combination of pre-existing network technologies.{" "}
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default MissionContent;
