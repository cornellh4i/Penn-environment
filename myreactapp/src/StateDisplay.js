import React, { Component } from 'react'

class StateDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ border: "1px solid black", textAlign: "left", height: "48px" }}>
        <p style={{ marginLeft: "50px", float: "left" }}>{this.props.stateName}</p>
        <button style={{ float: "right" }} onClick={() => this.props.deleteState(this.props.index)}>Delete</button>
        <button style={{ float: "right" }} onClick={() => this.props.editState(this.props.index)}>Edit State</button>

      </div >
    );
  }
}

export default StateDisplay;