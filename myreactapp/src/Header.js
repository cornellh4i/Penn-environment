import React, { Component } from 'react';
import { Linking } from 'react-native';
import Logo from './logo.png';
import './style.css';
import { Link } from 'react-router-dom';

require('typeface-merriweather');
require('typeface-open-sans');

class Header extends Component {
  render() {
    return (
      <div
        style={{
          display: 'inline-flex',
          width: '100%',
          height: '0%',
          top: '0px',
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderColor: '#000000',
          marginBottom: '1%',
          background: 'rgba(236, 243, 216, 0.8)',
          blend: 'Pass through',
        }}
      >
        <Link to='/'>
          <img
            alt=''
            src={Logo}
            style={{
              width: '60%',
              marginRight: '2%',
              marginLeft: '.7%',
              marginBottom: '0%',
              marginTop: '.7%',
            }}
          />
        </Link>
        <div style={{ height: '30px', marginTop: '3%' }}>
          <h1
            style={{
              width: '20%',
              top: '0%',
              fontFamily: 'Merriweather',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '40px',
              color: '#C1D82E',
              display: 'inline',
              position: 'relative',
            }}
          >
            {' '}
            Eco
          </h1>

          <h1
            style={{
              width: '20%',
              top: '0%',
              fontFamily: 'Merriweather',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '40px',
              color: '#3E4981',
              display: 'inline',
              position: 'relative',
            }}
          >
            Bill
          </h1>

          <h1
            style={{
              width: '20%',
              top: '0%',
              fontFamily: 'Merriweather',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '40px',
              color: 'black',
              display: 'inline',
              position: 'relative',
              marginLeft: '5%',
            }}
          >
            Tracker
          </h1>
        </div>
        <div
          style={{
            height: '10%',
            marginTop: '3%',
            marginLeft: '40%',
          }}
        >
          <input
            type='submit'
            className='submitButton'
            value='Find My Legislator'
            onClick={() =>
              Linking.openURL(
                'https://www.legis.state.pa.us/cfdocs/legis/home/findyourlegislator/'
              )
            }
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 'normal',
              cursor: 'pointer',
              fontSize: '24px',
              width: '100%',
              background: 'transparent',
              color: 'black',
              borderWidth: '0px',
              padding: '10px',
              marginLeft: '0px',
            }}
          />
        </div>
      </div>
    );
  }
}
export default Header;
