import React, { Component } from 'react'
import './button.css'
import './input.css'
import './text.css'
import { addState } from './index.js'
import CarouselComponent from './carousalComponent'
const { MongoClient } = require("mongodb");



class Bill extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    event.preventDefault();
    var newStateInfo = {
      bill_name: this.bill_name.value,
      bill_number: this.bill_number.value,
      bill_summary: this.bill_summary.value,
      bill_link: this.bill_link.value,
      sponsor_name: this.sponsor_name.value,
      sponsor_link: this.sponsor_link.value
    };
    console.log(newStateInfo);

    // Clear form after submit
    this.bill_name.value = "";
    this.bill_number.value = "";
    this.bill_summary.value = "";
    this.bill_link.value = "";
    this.sponsor_name.value = "";
    this.sponsor_link.value = "";
  }


  handleChange(event) {
    this.className = "inputError"
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value
    })

  }
}

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
