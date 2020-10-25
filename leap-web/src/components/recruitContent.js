import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { genConnectedDots } from "./connect-dots-bg.js";

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
                    <h3 className="header">Open-source project</h3>
                    <p>
                    Interested in joining? Contact Christian at Christian@leapsystems.online
                    </p>
                </section>
                </Container>
            </div>

         );
    }
}
 
export default RecruitContent;