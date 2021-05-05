/*
import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import AdminPage from "./AdminPage";

import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from "ra-data-json-server";
*/
// const dataProvider =
//   jsonServerProvider("https://jsonplaceholder.typicode.com");

/*
class App extends Component {
  render() {
    return (
      <Admin dataProvider={"index.hmtl"} authProvider={authProvider}>
        <AdminPage>
        {/* <Admin authProvider={authProvider}> } 
        {/* <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} /> }
        {/* <Resource name="index.html"></Resource> }
      
        <p>logged in!</p>
        </AdminPage>
      </Admin>
    );
  }
}
export default App;
*/

import React, { Component } from 'react';
import { Button, Text, View, Linking, StyleSheet } from "react-native";
import Header from "./Header";
import './button_billPage.css'
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
    var dummy_url = 'https://www.legis.state.pa.us/cfdocs/cteeInfo/Index.cfm?Code=9&CteeBody=S'
    var dummy_sponsor = 'dummy sponsor'
    var dummy_full_text = 'https://www.legis.state.pa.us/CFDOCS/Legis/PN/Public/btCheck.cfm?txtType=PDF&sessYr=2021&sessInd=0&billBody=S&billTyp=B&billNbr=0408&pn=0401'
    return (
      <View>
        <div className="App" style={{ width: "100%", left: "0%" }}>
          <Header />
          <input type="submit" className="submitButton" value="←Back" style={{
            fontFamily: "Open Sans", fontWeight: "normal",
            marginLeft: "3%", width: "4%", height: "3%", padding: "0px", background: "transparent", color: "black", borderWidth: "0px"
          }} />
          <h2 style={{ fontFamily: "Roboto", marginLeft: "3%", fontSize: "36px", marginBottom: "0%", marginTop: ".5%" }}>Senate Bill 408 P.N. 401</h2>
          <h3 style={{ fontFamily: "Roboto", marginLeft: "3%", marginTop: ".1%", fontSize: "20px", fontWeight: "normal" }}>Introduced on March 12</h3>
          <input type="submit" className="submitButton" value="Download PDF" style={{
            fontFamily: "Roboto", fontWeight: "normal",
            marginLeft: "3%", width: "10%", height: "3%", padding: "6px", background: "black"
          }} />
          <h4 style={{
            marginTop: "1.5%", marginLeft: "3%", width: "50%",
            height: "90%", borderWidth: "1px", borderColor: "black", borderStyle: "solid",
            borderRadius: "3px", fontFamily: "Roboto", fontWeight: "normal", fontSize: "20px", padding: "3px"
          }}>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse diam id quis ullamcorper. Auctor
            volutpat placerat ut cursus fermentum pretium. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse diam id quis ullamcorper. Auctor volutpat
      placerat ut cursus fermentum pretium.</h4>
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
            onPress={() => Linking.openURL(dummy_url)}>
            {dummy_petition2}
          </Text>
        </View>
        <View style={styles.billTabArea}>
          <View style={styles.buttonsRow}>
            <Button style={styles.overviewButton}
              title="Overview"
              color="#334581"
            />
            <Button
              title="Full Text"
              color="#334581"
              marginLeft={50}
              onPress={() => Linking.openURL(dummy_full_text)}
            />

          </View>
          <View style={styles.overviewRows}>
            <Text style={styles.tabHeaders}>Sponsor: </Text>
            <Text style={styles.tabInfoSponsor}>Sen. Katie Muth</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subInfo}>Senate District 44, Democrat</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Co-Sponsor: </Text>
            <Text style={styles.tabInfo}>Sen. Jay Costa</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Date: </Text>
            <Text style={styles.tabInfo}>March 12 2021</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Status: </Text>
            <Text style={styles.tabInfo}>Referred to ENVIORNMENTAL RESOURCES AND ENERGY</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.tabHeaders}>Memo: <br></br></Text>
            <Text style={styles.tabInfo}>Increase Fines for Major Facilities
            Air Pollution <br></br>Episodes and Municipal Notification Requirement.</Text>
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
  },
  overviewRows: {
    flex: 2,
    flexDirection: "row",
    height: 27.24,
  },
  billTabArea: {
    paddingVertical: 60,
    paddingLeft: 55,
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

  },
  tabInfoSponsor: {
    fontFamily: 'Open Sans',
    fontSize: 20,
    paddingVertical: 34,
    textDecorationLine: 'underline',
  },
  tabInfo: {
    fontFamily: "Open Sans",
    fontSize: 20,
    paddingVertical: 33,
  },
  subInfo: {
    fontFamily: "Open Sans",
    fontSize: 14,
    color: '#868585'
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
