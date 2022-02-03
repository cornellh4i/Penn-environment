import React, { Component } from 'react'
import './style.css'

import StateDisplay from './StateDisplay.js'

class StatesContainer extends Component {

  render() {
    return (
      <div>
        {this.props.states.map((stateInfo, index) => {
          if(index %2 === 0) var color = "#C1D82E"
          else color ="#F7FFE2"
           return <StateDisplay
            stateName={stateInfo.bill_name}
            key={index}
            index={index}
            deleteState={this.props.deleteState}
            editState={this.props.editState}
            color = {color}
          />
  })}
      </div >
    );
  }
}

export default StatesContainer;