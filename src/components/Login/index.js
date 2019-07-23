import React from 'react';
import axios from 'axios';

import sentences from './data/texts';

import Login from './Login';
import ForgottenPassword from './ForgottenPassword';

import './login.scss';

class LoginPage extends React.Component {
  state = {
    view: 'login',
    email: '',
    password: '',
    lang: 'fr',
    username: '',
    message: '',
  }


  changeView = targetView => () => {
    this.setState({
      view: targetView,
    });
  }

  inputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  submitLogin = () => {
    console.log('App : submitLogin');
    const { email, password } = this.state;

    axios.post('http://localhost:3000/login', {
      email,
      password,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: '',
          username: response.data,
          view: 'logged',
        });
      })
      // en cas d'echec : catch
      .catch((error) => {
        console.error(error.message);
        console.error(error.response);
        this.setState({
          message: 'Données Incorrecte...',
        });
      });
  }

  render() {
    const {
      view,
      email,
      password,
      lang,
      username,
      message,
    } = this.state;

    return (
      <div className="app">
        {message !== '' && (
          <div id="alert-message">
            {message}
          </div>
        )}
        {view === 'logged' && (
          <div id="logged">
            <h1 className="app-title">Bienvenue Dans Ton Profile</h1>
            <p className="app-desc">{username}</p>
          </div>
        )}
        {view === 'login' && (
          <Login
            onSubmitForm={this.submitLogin}
            dataText={sentences[lang].login}
            onChangeView={this.changeView('password')}
            email={email}
            onInputChange={this.inputChange}
            password={password}
          />
        )}
        {view === 'password' && (
          <ForgottenPassword
            dataText={sentences[lang].password}
            onChangeView={this.changeView('login')}
            onInputChange={this.inputChange}
            email={email}
          />
        )}
      </div>
    );
  }
}


export default LoginPage;
