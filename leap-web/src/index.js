import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/topBar";
import ParallaxWelcomeImage from "./components/parallaxWelcomeImage";
import MissionContent from "./components/missionContent";
import AccompContent from "./components/accompContent";
import AboutContent from "./components/aboutContent";
import TeamContent from "./components/teamContent";
import FooterMenu from "./components/footerMenu";
import "./css/mainpage.css";
import { genConnectedDots } from "./components/connect-dots-bg.js";
import "react-slideshow-image/dist/styles.css";
import "react-multi-carousel/lib/styles.css";
import RecruitContent from "./components/recruitContent";

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <ParallaxWelcomeImage />
    <MissionContent />
    <AboutContent />
    <AccompContent />
    <TeamContent />
    <RecruitContent/>
    <FooterMenu />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
