import React from 'react';
import web from '../assets/hero1.png';
import Common from './Common';

const About = () => {
  return(
    <>
   <Common name="Welcome to" imgsrc={web} visit="/contact" btname="Contact Now" />
    </>

  );
};
export default About;