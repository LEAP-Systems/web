import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { genConnectedDots } from "./dots.js";

class RecruitContent extends Component {
    componentDidMount() {
        genConnectedDots("UInetwork5");
    }
    render() { 
        return ( 
            <div id="recruitment" className="d-flex justify-content-center">
                <canvas id="UInetwork5" className="canvas-pos"></canvas>
                <Container
                fluid
                className="text-container-width text-container-colour roundcorners about-pos"
                >
                <section id="recruitment">
                    <h3 className="header">Seeking Contributors</h3>
                    <br></br>
                    <br></br>
                    <p>
                        We are looking to expand our team on a voluntary basis to fill R&D roles in telecommunications, machine learning, web development, embedded IoT, and high-speed digital design. If any of these topics interest you contact us via email: christian@leapsystems.online.
                    </p>
                </section>
                </Container>
            </div>

         );
    }
}
 
export default RecruitContent;