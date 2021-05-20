import React, { Component } from 'react'
import './button.css'


class StateDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: "1px solid black", textAlign: "left", height: "48px", background: this.props.color }}>
        <button style={{ float: "right", marginTop: '10px' }} onClick={() => this.props.deleteState(this.props.index)}><span class="icon"></span>Delete</button>
        <button style={{ float: "right", marginTop: '10px' }} onClick={() => this.props.editState(this.props.index)}>Edit Bill</button>
        <p style={{ marginLeft: '10px' }}>Bill Name: {this.props.stateName}</p>
      </div >
    );
  }
}

export default StateDisplay;