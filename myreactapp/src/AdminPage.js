import React from 'react';
import Bills from './Bills.js';
import StatesContainer from './StatesContainer.js'
import './App.css'
import './text.css'
import './textBlocks.css'
import CarouselComponent from './carousalComponent.js';

class AdminPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      states: [
      ],
      editing_index: -1
    };
  }

  addState(newStateInfo) {
    var states = this.state.states;
    states.push(newStateInfo);
    this.setState({ states: states });
  }

  deleteState(index) {
    var states = this.state.states;
    states.splice(index, 1);
    this.setState({ states: states })
  }

  populatetext(index) {
    var bill_name = this.state.states[index].bill_name;
    document.getElementById("Bill Name").value = bill_name;
    var bill_number = this.state.states[index].bill_number;
    document.getElementById("Bill Number").value = bill_number;
    var bill_summary = this.state.states[index].bill_summary;
    document.getElementById("Bill Summary").value = bill_summary;
    var bill_link = this.state.states[index].bill_link
    document.getElementById("Bill Link").value = bill_link;
    this.setState({ editing_index: index });
    var sponsor_name = this.state.states[index].sponsor_name;
    document.getElementById("Sponsor Name").value = sponsor_name;
    var sponsor_link = this.state.states[index].sponsor_link;
    document.getElementById("Sponsor Link").value = sponsor_link;

    this.setState({ editing_index: index });
  }

  editState(index) {
    console.log(index);
    var states = this.state.states;
    states.splice(index, 1);
    this.setState({ states: states })
  }

  render() {
    return (
      <div
        className="Admin"
        style={{ height: "100vh", padding: 100 }} >
        <div style={{ width: "100%" }}>
          <div style={{ float: "left", width: "50%", height: "50%" }}>
            <h1 className="textHeading">State Form</h1>
            <Bills states={this.state.states} addState={this.addState.bind(this)} editState={this.editState.bind(this)} index={this.state.editing_index} />
          </div>
        </div>
        {/* <CarouselComponent></CarouselComponent> */}
      </div >


    );
  }
}
export default AdminPage;
