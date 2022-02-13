import React, { Component } from 'react';
import { Linking } from 'react-native';
import { Link } from 'react-router-dom';

import Logo from '../img/fblogo.jpg';
import Logo2 from '../img/twitterlogo.jpg';
import Logo3 from '../img/insta.png';

require('typeface-merriweather');
require('typeface-open-sans');

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: 'inline-flex',
          width: '100%',
          bottom: '0px',
          background: 'rgba(236, 243, 216, 0.8)',
          blend: 'Pass through',
        }}
      >
        <div className='layout'>
          <input
            type='submit'
            className='scoreCardButton'
            value='Env. Scorecard'
            onClick={() =>
              Linking.openURL('https://scorecard.conservationpa.org/')
            }
          />
          <input
            type='submit'
            className='scoreCardButton'
            value='PennEnvironment'
            onClick={() => Linking.openURL('https://pennenvironment.org/')}
          />

          <div className='appLogos'>
            <a target='_blank' href='https://www.facebook.com/PennEnvironment'>
              <img alt='Facebook' src={Logo} />
            </a>
            <a target='_blank' href='https://twitter.com/pennenvironment'>
              <img alt='Twitter' src={Logo2} />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/pennenvironment/'
            >
              <img alt='Instagram' src={Logo3} />
            </a>
          </div>
          <Link to={{ pathname: '/login' }}>
            <input
              type='submit'
              className='submitButton'
              value='Admin'
              style={{
                fontFamily: 'Open Sans',
                fontWeight: 'normal',
                cursor: 'pointer',
                fontSize: '20px',
                background: 'transparent',
                color: 'black',
                borderWidth: '0px',
                padding: '10px',
                marginLeft: '0px',
              }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;
