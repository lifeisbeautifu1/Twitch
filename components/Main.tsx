import React from 'react';
import { LiveChannels, Hero, IconBar, Categories } from './';

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  );
};

export default Main;
