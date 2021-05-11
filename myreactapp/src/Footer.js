import React, { Component } from "react";
import { Linking } from "react-native";
import { Link } from "react-router-dom";
import "./footer.css"
import "./fblogo.jpg"
import "./twitterlogo.jpg"

require('typeface-merriweather');
require('typeface-open-sans');

class Footer extends Component {
  render() {
    return (
      <div style={{
        display: "inline-flex", width: '100%',
        bottom: "0px", height: "122px", background: "rgba(236, 243, 216, 0.8)",
        blend: "Pass through"
      }}>
       <div className = "layout">
        <h1 className = "text">View Archived Bills</h1>
        <h1 className = "text">About Us</h1>
        <h1 className = "text">Follow Us</h1>
        <h1 className = "scoreCardButton">Penn Environment Score Card</h1>
        <h1 className = "aboutButton">Penn Environment</h1>
        <div className = "appLogos">
          <img src= "fblogo.jpg"/>
          <img src= "twitterlogo.jpg"/>
        </div>
      </div>
        <div style={{ marginLeft: "45%", height: "10%", paddingTop: "5%" }}>
          <input type="submit" className="submitButton" value="Find My Legislator" onClick={() => Linking.openURL("https://www.legis.state.pa.us/cfdocs/legis/home/findyourlegislator/")}
            style={{
              fontFamily: "Open Sans", fontWeight: "normal", cursor: "pointer",
              width: "100%", height: "20%", background: "transparent",
              color: "black", borderWidth: "0px", padding: "0px", marginLeft: "0px"
            }} />
        </div>

        < div style={{ marginLeft: "1%", paddingTop: "5%", height: "10%" }}>
          <Link to={{ pathname: "/AdminPage" }}>
            <input type="submit" className="submitButton" value="Admin" style={{
              fontFamily: "Open Sans", fontWeight: "normal", cursor: "pointer",
              width: "100%", height: "20%", background: "transparent",
              color: "black", borderWidth: "0px", padding: "0px", marginLeft: "0px"
            }} />  </Link>
        </div>
      </div>
    )
  }
};
export default Footer;
