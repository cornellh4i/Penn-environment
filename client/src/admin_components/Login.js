import React from 'react';
import '../css/Login.css';
import Header from '../bill_components/Header';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class Login extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const token = { username: 'admin', password: 'password' };
    if (
      this.password.value === token.password &&
      this.username.value === token.username
    )
      this.props.history.push('/AdminPage');
    else alert('Incorrect Login Info');
  };

  render() {
    return (
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
        <div className='login-wrapper'>
          <h1>Please Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Username</p>
              <input
                required
                type='text'
                id='username'
                name='username'
                ref={(el) => (this.username = el)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                required
                type='password'
                id='password'
                name='password'
                ref={(el) => (this.password = el)}
              />
            </label>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
