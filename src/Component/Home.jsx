import React from 'react';
import web from '../assets/home.png';
import Common from './Common';

const Home = () => {
  return(
    <>
    <Common name="Join Us " imgsrc={web} visit="/service" btname="Get Started" />
    </>

  );
};
export default Home;