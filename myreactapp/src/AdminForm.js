import React, { Component } from 'react'
import './style.css'
import { View, StyleSheet } from "react-native";
import StatesContainer from './StatesContainer.js'
require('typeface-open-sans');

class AdminForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { data: [] , editing_index: -1};
    fetch("http://localhost:3001/showall")
      .then(data => data.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newStateInfo = {
      bill_number: this.bill_number.value,
      bill_name: this.bill_name.value,
      bill_intro_date: "",
      bill_summary: this.bill_summary.value,
      bill_sponsor: this.sponsor_name.value,
      sponsor_link: "",
      sponsor_title: "",
      sponsor_district: "",
      bill_cosponsor: "",
      bill_status: ""
    };

    if (this.state.editing_index < 0) {
      var states = this.state.states;
      states.push(newStateInfo);
      this.setState({ states: states });
    }
    else{
        var states = this.state.states;
        fetch("http://localhost:3001/delete", {
            method: "post",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(states[this.state.editing_index])
        });

        states[this.state.editing_index] = newStateInfo;
        this.setState({ states: states });
        this.setState({ editing_index: -1 });
    }

    fetch("http://localhost:3001/insert", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStateInfo)
    });

    this.bill_name.value = "";
    this.bill_number.value = "";
    this.bill_summary.value = "";
    this.bill_link.value = "";
    this.sponsor_name.value = "";
    this.sponsor_link.value = "";
  }

  deleteState(index) {
      var states = this.state.data;

      if(window.confirm("Are you Sure you want to delete this?")){
        fetch("http://localhost:3001/delete", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(states[index])
      });
      states.splice(index, 1);
      this.setState({ states: states })
      }

      

  }


  populatetext(index) {
    var bill_name = this.state.data[index].bill_name;
    document.getElementById("bill_name").value = bill_name;
    var bill_number = this.state.data[index].bill_number;
    document.getElementById("bill_number").value = bill_number;
    var bill_summary = this.state.data[index].bill_summary;
    document.getElementById("bill_summary").value = bill_summary;
    var bill_sponsor = this.state.data[index].bill_sponsor
    document.getElementById("sponsor_name").value = bill_sponsor;
    this.setState({ editing_index: index });
    var sponsor_link = this.state.data[index].sponsor_link;
    document.getElementById("bill_link").value = sponsor_link;

    this.setState({ editing_index: index });
  }

  editState(index) {
    var states = this.state.data;
    this.setState({ states: states })
    this.populatetext(index)
  }

  render() {
    return (
      <div>
        <View style={styles.billList}>
          <div style={{ width: "25%", height: "100%", paddingLeft: 10 }}>
            <div className="webTextBlock">
              <h2 style={{ fontFamily: "Roboto", marginLeft: "10px", fontSize: "24px", marginBottom: "2%"}}>Bill List</h2>
              <StatesContainer states={this.state.data} deleteState={this.deleteState.bind(this)} editState={this.editState.bind(this)} />
            </div>
          </div>
        </View>


        <div className="AdminForm" style={{ width: "100%", paddingBottom: "1%" }}>
          <h2 style={{ fontFamily: "Roboto", marginLeft: "10%", fontSize: "24px", marginBottom: "0%", marginTop: "2%" }}>Add a Bill</h2>
          <form onSubmit={this.handleSubmit} style={{ marginLeft: "10%" }}>
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Name </p>
            <input
              type="text"
              className="input"
              id='bill_name'
              placeholder='Insert name here'
              ref={el => this.bill_name = el}
              style={{ width: "75%", paddingLeft: "5px" }} />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Number</p>
            <input
              type="text"
              className="input"
              id='bill_number'
              placeholder='Insert number here'
              ref={el => this.bill_number = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Summary</p>
            <input ref={el => this.bill_summary = el} id='bill_summary' placeholder="Insert summary here" style={{
              paddingLeft: "5px", paddingTop: "5px", width: "74%", fontFamily: "Arial", fontSize: "16px", height: "110px",
              fontWeight: "normal", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)", borderRadius: "4px", border: "1px solid #CCCCCC"
            }}></input>
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>PA Legislator Link</p>
            <input
              type="text"
              className="input"
              id='bill_link'
              placeholder='Insert link here'
              ref={el => this.bill_link = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Sponsor</p>
            <input
              type="text"
              className="input"
              id='sponsor_name'
              placeholder='Insert sponsor name'
              ref={el => this.sponsor_name = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Co-Sponsor(s)</p>
            <input
              type="text"
              className="input"
              // id='sponsor_link'
              placeholder='Insert co-sponsor name list separated by commas'
              ref={el => this.sponsor_link = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <div className="UpdateButton" style={{ width: "15%", paddingLeft: "60%" }}>
            <input type="button" className="submitButton" value="Update"/>
            </div>
            <div hidden={this.state.editing_index == -1} className="UpdateButton" style={{ width: "15%", paddingLeft: "60%" }}>
            <input type="submit" className="submitButton" value="Cancel"/>
            </div>

          </form >
        </div >
      </div>
    )
  }
}

const styles = StyleSheet.create({
  billList: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    top: 175,
    left: 1200
  }
})
export default AdminForm
