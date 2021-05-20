import React from 'react';
import './App.css'
import './text.css'
import './textBlocks.css'
import AdminForm from './AdminForm.js';
import Header from "./Header";
import { Link } from "react-router-dom";


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


  populatetext(index) {
    var bill_name = this.state.states[index].bill_name;
    document.getElementById("Bill Name").value = bill_name;
    var bill_number = this.state.states[index].bill_number;
    document.getElementById("Bill Number").value = bill_number;
    var bill_intro_date = this.state.states[index].bill_intro_date;
    document.getElementById("Bill Intro Date").value = bill_intro_date;
    var bill_summary = this.state.states[index].bill_summary;
    document.getElementById("Bill Summary").value = bill_summary;
    var bill_sponsor = this.state.states[index].bill_sponsor
    document.getElementById("Bill Sponsor").value = bill_sponsor;
    this.setState({ editing_index: index });
    var sponsor_link = this.state.states[index].sponsor_link;
    document.getElementById("Sponsor Link").value = sponsor_link;
    var sponsor_title = this.state.states[index].sponsor_title;
    document.getElementById("Sponsor Title").value = sponsor_title;
    var sponsor_district = this.state.states[index].sponsor_district;
    document.getElementById("Sponsor District").value = sponsor_district;
    var bill_cosponsor = this.state.states[index].bill_cosponsor;
    document.getElementById("Bill Cosponsor").value = bill_cosponsor;
    var bill_status = this.state.states[index].bill_status;
    document.getElementById("Bill Status").value = bill_status;
    var links = this.state.states[index].links;
    document.getElementById("Links").value = links;
    this.setState({ editing_index: index });
  }

  editState(index) {
    console.log(index);
    var states = this.state.states;
    states.splice(index, 1);
    this.setState({ states: states })
    this.populatetext(index)
  }

  render() {
    return (
      <div
        className="Admin"
        style={{ height: "100%" }} >
        <div style={{ width: "100%" }}>
          <Header />
          <Link to="/">
          <input type="submit" className="submitButton" value="←Home" style={{
            fontFamily: "Open Sans", fontWeight: "normal", cursor: "pointer",
            marginLeft: "1%", width: "5%", height: "3%", padding: "0px", background: "transparent", color: "black", borderWidth: "0px"
          }} />
          </Link>
          <div style={{ float: "left", width: "50%", height: "50%" }}>
            <AdminForm states={this.state.states} addState={this.addState.bind(this)} editState={this.editState.bind(this)} index={this.state.editing_index} />
          </div>
        </div>
      </div >
    );
  }
}
export default AdminPage;
