import React from 'react';
import CarouselComponent from './carousalComponent';
import '../css/style.css';

function Bills() {
  return (
    <div className='background'>
      <h1 className='billsText1'>A Nice Bills</h1>

      <CarouselComponent featured={true}></CarouselComponent>

      <h1 className='billsText2'>Another Nice Bill</h1>

      <CarouselComponent featured={false}></CarouselComponent>
    </div>
  );
}

export default Bills;
