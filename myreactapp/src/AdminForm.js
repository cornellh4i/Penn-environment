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
    console.log("here")
    event.preventDefault();
    var newStateInfo = {
      bill_number: this.bill_number.value,
      bill_name: this.bill_name.value,
      bill_intro_date: this.bill_intro_date.value,
      bill_summary: this.bill_summary.value,
      bill_sponsor: this.sponsor_name.value,
      bill_pdf: this.bill_pdf.value,
      sponsor_district: this.sponsor_district.value,
      sponsor_party: this.sponsor_party.value,
      bill_updated: this.bill_updated.value,
      bill_status: this.bill_status.value,
      bill_memo: this.bill_memo.value,
      featured: this.featured.value
    };
    console.log(newStateInfo)

    if (this.state.editing_index < 0) {
      var states = this.state.data;
      // states.push(newStateInfo);
      // this.setState({ data: states });
    }
    else{
        states = this.state.data;
        fetch("http://localhost:3001/delete", {
            method: "post",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(states[this.state.editing_index])
        });

        states[this.state.editing_index] = newStateInfo;
        this.setState({ data: states });
        document.getElementById("cancel").style.hidden = true;
        this.state.editing_index = -1;

    }

    fetch("http://localhost:3001/insert", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStateInfo)
    });

    this.clearForm();
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


  clearForm(){
    this.bill_number.value= "";
    this.bill_name.value= "";
    this.bill_intro_date.value= "";
    this.bill_summary.value= "";
    this.sponsor_name.value= "";
    this.bill_pdf.value= "";
    this.sponsor_district.value= "";
    this.sponsor_party.value= "";
    this.bill_updated.value= "";
    this.bill_status.value= "";
    this.bill_memo.value= "";
    this.featured.value= "";
  }
  
  cancelEdit(){
    this.clearForm()
    document.getElementById("cancel").style.hidden = true;
  }

  populatetext(index) {
    document.getElementById("bill_number").value = this.state.data[index].bill_number;
    document.getElementById("bill_name").value = this.state.data[index].bill_name;
    document.getElementById("bill_intro_date").value = this.state.data[index].bill_intro_date;
    document.getElementById("bill_summary").value = this.state.data[index].bill_summary;
    document.getElementById("sponsor_name").value = this.state.data[index]. bill_sponsor;
    document.getElementById("bill_pdf").value = this.state.data[index].bill_pdf;
    document.getElementById("sponsor_district").value = this.state.data[index].sponsor_district;
    document.getElementById("sponsor_party").value = this.state.data[index].sponsor_party;
    document.getElementById("bill_updated").value = this.state.data[index].bill_updated;
    document.getElementById("bill_status").value = this.state.data[index].bill_status;
    document.getElementById("bill_memo").value = this.state.data[index].bill_memo;
    document.getElementById("featured").value = this.state.data[index].featured;

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
            <input required 
              type="text"
              className="input"
              id='bill_name'
              placeholder='Insert name here'
              ref={el => this.bill_name = el}
              style={{ width: "75%", paddingLeft: "5px" }} />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Number</p>
            <input required
              type="text"
              className="input"
              id='bill_number'
              placeholder='Insert number here'
              ref={el => this.bill_number = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
             <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Introduction Date</p>
            <input required
              type="date"
              className="input"
              id='bill_intro_date'
              ref={el => this.bill_intro_date = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Summary</p>
            <input required ref={el => this.bill_summary = el} id='bill_summary' placeholder="Insert summary here" style={{
              paddingLeft: "5px", paddingTop: "5px", width: "74%", fontFamily: "Arial", fontSize: "16px", height: "110px",
              fontWeight: "normal", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)", borderRadius: "4px", border: "1px solid #CCCCCC"
            }}></input>
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill PDF Link</p>
            <input required
              type="text"
              className="input"
              id='bill_pdf'
              placeholder='Insert link here'
              ref={el => this.bill_pdf = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Sponsor</p>
            <input required
              type="text"
              className="input"
              id='sponsor_name'
              placeholder='Insert sponsor name'
              ref={el => this.sponsor_name = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Sponsor District</p>
            <input required
              type="text"
              className="input"
              id='sponsor_district'
              placeholder='Insert district number'
              ref={el => this.sponsor_district = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Sponsor Party</p>
            <input required
              type="text"
              className="input"
              id='sponsor_party'
              placeholder='Insert party name'
              ref={el => this.sponsor_party = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
             <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Bill Updated Date</p>
            <input required
              type="date"
              className="input"
              id='bill_updated'
              ref={el => this.bill_updated = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Status</p>
            <input required
              type="text"
              className="input"
              id='bill_status'
              placeholder='Insert status here'
              ref={el => this.bill_status = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Memo</p>
            <input required
              type="text"
              className="input"
              id='bill_memo'
              placeholder='Insert memo here'
              ref={el => this.bill_memo = el}
              style={{ width: "75%", paddingLeft: "5px" }}
            />
            <p className="textLabel" style={{ fontFamily: "Open Sans", fontWeight: "normal", marginBottom: "2px" }}>Featured?</p>
            <select name="cars" id="featured"  ref={el => this.featured = el}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>

            <div className="UpdateButton" style={{ width: "15%", paddingLeft: "60%" }}>
            <input required type="submit" className="submitButton" value="Update"/>
            </div>
            <div hidden={this.state.editing_index === -1} className="UpdateButton" style={{ width: "15%", paddingLeft: "60%" }}>
            <button id = "cancel" className="submitButton" onClick = {() => this.cancelEdit}>Cancel </button>
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
