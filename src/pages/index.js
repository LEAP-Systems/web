import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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
		</>
	);
}

export default Home;
