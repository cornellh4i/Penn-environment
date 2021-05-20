import React, { Component } from 'react'
import StateDisplay from './StateDisplay.js'

class StatesContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.states.map((stateInfo, index) => (
          <StateDisplay
            stateName={stateInfo.bill_name}
            key={index}
            index={index}
            deleteState={this.props.deleteState}
            editState={this.props.editState}
          />
        ))}
      </div >
    );
  }
}

export default StatesContainer;