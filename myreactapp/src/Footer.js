import React, { Component } from "react";
import { Linking } from "react-native";
import Logo from "./fblogo.jpg";
import Logo2 from "./twitterlogo.jpg";
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
        <input type="submit" className="scoreCardButton" value="Penn Environment Score Card" onClick={() => Linking.openURL("https://scorecard.conservationpa.org/")}/>
        <input type="submit" className="scoreCardButton" value="Penn Environment" onClick={() => Linking.openURL("https://pennenvironment.org/")}/>

        <div className = "appLogos">
        <a target="_blank" href="https://www.facebook.com/PennEnvironment">
          <img  alt = "" src= {Logo} style= {{marginRight: "5%"}}/>
          </a>
          <a target="_blank" href="https://twitter.com/pennenvironment">
          <img alt = "" src= {Logo2}/>
          </a>
        </div>
      </div>
      </div>
    )
  }
};
export default Footer;
