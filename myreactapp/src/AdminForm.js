import React, { Component } from 'react'
import './button.css'
import './input.css'
import './text.css'

class AdminForm extends Component {
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
    this.props.addState(newStateInfo);

    // Clear form after submit
    this.bill_name.value = "";
    this.bill_number.value = "";
    this.bill_summary.value = "";
    this.bill_link.value = "";
    this.sponsor_name.value = "";
    this.sponsor_link.value = "";
  }

  // Method causes to store all the values of the  
  // input field in react state single method handle  
  // input changes of all the input field using ES6  
  // javascript feature computed property names 
  handleChange(event) {
    this.className = "inputError"
    this.setState({
      // Computed property names 
      // keys of the objects are computed dynamically 
      [event.target.name]: event.target.value
    })

  }

  //if  index > -1, then show update state


  // Return a controlled form i.e. values of the  
  // input field not stored in DOM values are exist  
  // in react component itself as state 
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginLeft: "100px" }}>
        <p className="textLabel">Bill Name</p>
        <input
          type="text"
          className="input"
          id='bill_name'
          placeholder='Bill Name'
          ref={el => this.bill_name = el} />
        <p className="textLabel">Bill Number</p>
        <input
          type="text"
          className="input"
          id='bill_number'
          placeholder='Bill Number'
          ref={el => this.bill_number = el}
        />
        <p className="textLabel">Bill Summary</p>
        <input
          type="text"
          className="input"
          id='bill_summary'
          placeholder='Bill Summary'
          ref={el => this.bill_summary = el}
        />
        <p className="textLabel">Bill Link</p>
        <input
          type="text"
          className="input"
          id='bill_link'
          placeholder='Bill Link'
          ref={el => this.bill_link = el}
        />
        <p className="textLabel">Sponsor Name</p>
        <input
          type="text"
          className="input"
          id='sponsor_name'
          placeholder='Sponsor Name'
          ref={el => this.sponsor_name = el}
        />
        <p className="textLabel">Sponsor Link</p>
        <input
          type="text"
          className="input"
          id='sponsor_link'
          placeholder='Sponsor Link'
          ref={el => this.sponsor_link = el}
        />
        <input type="submit" className="submitButton" value="Add State" />
        {/* <button className="submitButton"onClick={() => this.props.editState(this.props.index)}>Update Value </button> */}

      </form>
    )
  }
}

export default AdminForm