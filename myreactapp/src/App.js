import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import AdminPage from "./AdminPage";
import Header from "./Header";
import Footer from "./Footer";
import Bill from "./Bills";
import { Button, Text, View, Linking, StyleSheet } from "react-native";

import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from "ra-data-json-server";



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
