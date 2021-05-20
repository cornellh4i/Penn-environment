import React from 'react'
import './button.css'
import './input.css'
import './text.css'
import CarouselComponent from './carousalComponent'



  function Bills() {
    return (
      <div>
        <div className="inputs">
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
        </div>

        <h1 className="billsText1">Featured Bills</h1>

        <CarouselComponent></CarouselComponent>

        <h1 className="billsText2">Active Bills</h1>

        <CarouselComponent></CarouselComponent>

      </div>

    )
  }


export default Bills
