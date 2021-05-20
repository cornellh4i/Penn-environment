import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bill from "./Bills";
import {View} from "react-native";



class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Bill />
        <Footer />
      </View>
    );
  }
}
export default App;
