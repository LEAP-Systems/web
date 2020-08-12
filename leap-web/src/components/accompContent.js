import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {genConnectedDots} from "./connect-dots-bg.js";

class AccompContent extends Component {
  componentDidMount(){
    genConnectedDots("UINetwork");
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <canvas id="UInetwork" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners mission-pos"
        >
          <section id="acc">
            <h3 class="header">Accomplishments</h3>
            <p>
              We were able to successfully achieve a parallel light driven data
              transmission using a 4x4x4 LED cube and a webcam. On start, the
              LED cube would start transmitting random arrays of data. A
              receiver would then be able to read those random points until a
              neural network can be constructed using those random points. The
              receiver would send a frame data to the transmitter via wifi link
              to allow the transmitter acknowledge there is a receiver
              listening. Based on the frame data sent, the transmitter is able
              to detect where the transmitter is receiving. The cache built in
              for each side of the cube's transmission holds the recent data
              transmitted. If the receiver's frame data matches one of the
              values found in either of the caches, the receiver can be
              validated and the direction is known. Once the connection is set,
              we are able to select files to transmit to the receiver. The user
              would select the desired files and the files would then be
              converted into byte arrays and then hardware mapped to the cube.
              The receiver would read in these values from the cube. The neural
              structure in the receiver algorithm (IRIS) maps the LEDs and
              prints out a bytearray using the spatial-codec. The byte array is
              then used to recreate the file.{" "}
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default AccompContent;
