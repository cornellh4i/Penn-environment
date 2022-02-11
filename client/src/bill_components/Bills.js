import React from 'react';
import CarouselComponent from './carousalComponent';
import '../css/style.css';

function Bills() {
  return (
    <div className='background'>
      <h1 className='billsText1'>Featured Bills</h1>

      <CarouselComponent featured={true}></CarouselComponent>

      <h1 className='billsText2'>Active Bills</h1>

      <CarouselComponent featured={false}></CarouselComponent>
    </div>
  );
}

export default Bills;
