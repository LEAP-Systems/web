import React from 'react';
// import logo from './images/LEAP_BANNER_INV_NT.png';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import TopBar from "./components/topBar";
// import Home from "./components/home";
// import MissionContent from "./components/missionContent";
// import AccompContent from "./components/accompContent";
// import AboutContent from "./components/aboutContent";
// import TeamContent from "./components/teamContent";
// import FooterMenu from "./components/footerMenu";
// import RecruitContent from "./components/recruitContent";

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
