import React from 'react'
import CarouselComponent from './carousalComponent'
import './style.css'




  function Bills() {
    return (
      <div className = "background">
        {/* <div className="inputs">
          <input
            type="text"
            className="inputKeyWords"
            placeholder="Keyword(s)"
          />
          <input
            type="text"
            className="inputBillNo"
            placeholder="Bill No."
          />
          <input
            type="text"
            className="inputSponsors"
            placeholder="Sponsor(s)"
          />
          <button
            className="searchButton">
            Search
          </button>
          <p className="reset">Reset</p>
        </div> */}

        <h1 className="billsText1">Featured Bills</h1>

        <CarouselComponent featured = {true}></CarouselComponent>

        <h1 className="billsText2">Active Bills</h1>

        <CarouselComponent featured = {false}></CarouselComponent>

      </div>

    )
  }


export default Bills
