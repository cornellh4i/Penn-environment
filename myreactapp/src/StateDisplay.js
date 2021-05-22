import React, { Component } from 'react'
import './style.css'


class StateDisplay extends Component {

  render() {
    return (
      <div style={{ border: "1px solid black", textAlign: "left", height: "48px", background: this.props.color }}>
        <button style={{ float: "right", marginTop: '10px' }} onClick={() => this.props.deleteState(this.props.index)}>Delete</button>
        <button style={{ float: "right", marginTop: '10px' }} onClick={() => this.props.editState(this.props.index)}>Edit Bill</button>
        <p style={{ marginLeft: '10px' }}>Bill Name: {this.props.stateName}</p>
      </div >
    );
  }
}

export default StateDisplay;