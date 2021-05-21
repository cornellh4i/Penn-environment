import React, { Component } from 'react';
import { Button, Text, View, Linking, StyleSheet } from "react-native";
import {Link } from "react-router-dom";
import './style.css'


import Header from "./Header";
require('typeface-open-sans');
require('typeface-roboto');

class App extends Component {
  constructor(props) {
    super(props);
  }
  handlePress() {

  }


  render() {
    var example_link_name = 'ENVIORNMENTAL RESOURCES AND ENERGY'
    var dummy_tag = 'dummy article link'
    var dummy_tag2 = 'dummy article link 2'
    var dummy_tag3 = 'dummy article link 3'
    var dummy_petition1 = 'dummy petition link 1'
    var dummy_petition2 = 'dummy petition link 2'
    console.log(this.props.location.state.data.bill_pdf)
    var dummy_url = 'https://www.legis.state.pa.us/cfdocs/cteeInfo/Index.cfm?Code=9&CteeBody=S'
    var dummy_full_text = 'https://www.legis.state.pa.us/CFDOCS/Legis/PN/Public/btCheck.cfm?txtType=PDF&sessYr=2021&sessInd=0&billBody=S&billTyp=B&billNbr=0408&pn=0401'
    return (
      <View>
        <div className="App" style={{ width: "100%", left: "0%" }}>
          <Header />
          <Link to="/">
          <input type="submit" className="submitButton" value="←Back" style={{
            fontFamily: "Open Sans", fontWeight: "normal", cursor: "pointer",
            marginLeft: "3%", width: "4%", height: "3%", padding: "0px", background: "transparent", color: "black", borderWidth: "0px"
          }} />
          </Link>
          <h2 style={{ textAlign: "left", fontFamily: "Roboto", marginLeft: "3%", fontSize: "36px", marginBottom: "0%", marginTop: ".5%" }}>Senate Bill {this.props.location.state.data.bill_number}</h2><br></br>
          <h3 style={{ textAlign: "left", fontFamily: "Roboto", marginLeft: "3%", marginTop: ".1%", fontSize: "20px", fontWeight: "normal" }}>Introduced on {this.props.location.state.data.bill_intro_date}</h3>
          <View style={styles.buttonsRow}>
            <Button
              title="Download PDF"
              color="#334581"
              marginLeft={50}
              onPress={() => Linking.openURL(this.props.location.state.data.bill_pdf)}
            />

          </View>
          <h4 style={{
            marginTop: "1.5%", marginLeft: "3%", width: "50%",
            height: "90%", borderWidth: "1px", borderColor: "black", borderStyle: "solid",
            borderRadius: "3px", fontFamily: "Roboto", fontWeight: "normal", fontSize: "20px", padding: "3px"
          }}>{this.props.location.state.data.bill_summary}</h4>
        </div>

        <View style={styles.articles}>
          <Text style={styles.subTitles}>Key Resources</Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {example_link_name}
          </Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_tag}
          </Text>
          <Text style={styles.subTitles}>Other Articles for this Bill</Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_tag}
          </Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_tag2}
          </Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_tag3}
          </Text>
          <Text style={styles.subTitles}>Related PennEnvironment Petitions</Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_petition1}
          </Text>
          <Text style={styles.articleLinks}
            onPress={() => Linking.openURL(dummy_full_text)}>
            {dummy_petition2}
          </Text>
        </View>

        <View style={styles.billTabArea}>
        <Text style={styles.overview}>Overview</Text>

           <View style={styles.overviewRows}>
            <Text style={styles.tabHeaders}>Sponsor: </Text>
            <Text style={styles.tabInfoSponsor}>Senator {this.props.location.state.data.bill_sponsor}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subInfo}>Senate District {this.props.location.state.data.sponsor_district}, {this.props.location.state.data.sponsor_party}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Co-Sponsor: </Text>
            <Text style={styles.tabInfo}>{this.props.location.state.data.bill_cosponsor}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Updated Date: </Text>
            <Text style={styles.tabInfo}>{this.props.location.state.data.bill_updated}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Status: </Text>
            <Text style={styles.tabInfo}>{this.props.location.state.data.bill_status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Memo: <br></br></Text>
            <Text style={styles.tabInfo}>{this.props.location.state.data.memo}</Text>
          </View>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  buttonsRow: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "3%"
  },
  overviewRows: {
    flex: 2,
    flexDirection: "row",
    height: 27.24,
  },
  billTabArea: {
    paddingLeft: 55,
    marginLeft: "50px"
  },
  tabButtons: {
    font: 'Open Sans',
    fontSize: 18,
    fontWeight: 400,
  },
  tabHeaders: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 33,
    marginLeft: "50px"

  },
  overview:{
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '27px',
    color: '#000000',
    padding: '0px'
  },
  tabInfoSponsor: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    paddingVertical: 34,
  },
  tabInfo: {
    fontFamily: "Open Sans",
    fontSize: 20,
    paddingVertical: 33,
  },
  subInfo: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: '#868585',
    marginLeft: "140px"

  },
  articleLinks: {
    color: 'black',
    paddingVertical: 12,
    paddingRight: 50,
    paddingLeft: 39,
    fontFamily: "Roboto",
    fontSize: 18,
  },
  articles:
  {
    position: 'absolute',
    top: 300,
    left: 1000,
    backgroundColor: '#A2C43D33',
    borderColor: 'black',
    borderRadius: 10,
    width: 500,
    height: 651
  },
  subTitles: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23.44,
    paddingLeft: 23,
    fontFamily: "Roboto"
  },

});
export default App;
