import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import { accolades, design, mission, recruit, team} from '../components/Info/data';

const Home = () => {
	const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open)
  };

  return (
		<>
      <Navbar open={open} toggle={toggle}/>
      <Sidebar open={open} toggle={toggle}/>
      <Hero/>
      <Info {...mission}/>
      <Info {...design}/>
      <Info {...team}/>
      <Info {...recruit}/>
      <Info {...accolades}/>
		</>
	);
}

export default Home;
