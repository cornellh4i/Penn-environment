import React from 'react';
import '../css/style.css';
import AdminForm from './AdminForm.js';
import Header from '../bill_components/Header';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
      editing_index: -1,
    };
  }

  addState(newStateInfo) {
    var states = this.state.states;
    states.push(newStateInfo);
    this.setState({ states: states });
  }

  editState(index) {
    console.log(index);
    var states = this.state.states;
    states.splice(index, 1);
    this.setState({ states: states });
    this.populatetext(index);
  }

  render() {
    return (
      <div className='Admin' style={{ height: '100%' }}>
        <div style={{ width: '100%' }}>
          <Header />
          <Link to='/'>
            <input
              type='submit'
              className='submitButton'
              value='←Home'
              style={{
                fontFamily: 'Open Sans',
                fontWeight: 'normal',
                cursor: 'pointer',
                marginLeft: '1%',
                width: '5%',
                height: '3%',
                padding: '0px',
                background: 'transparent',
                color: 'black',
                borderWidth: '0px',
              }}
            />
          </Link>
          <div style={{ float: 'left', width: '50%', height: '50%' }}>
            <AdminForm
              states={this.state.states}
              addState={this.addState.bind(this)}
              editState={this.editState.bind(this)}
              index={this.state.editing_index}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPage;
