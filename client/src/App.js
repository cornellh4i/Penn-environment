import React, { Component } from 'react';
import Header from './bill_components/Header';
import Footer from './bill_components/Footer';
import Bill from './bill_components/Bills';
import { View } from 'react-native';

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
