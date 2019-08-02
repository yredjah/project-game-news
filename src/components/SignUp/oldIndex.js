import React from 'react';

import sentences from './data/texts';

import SignUp from '.';

import 'src/components/Login/login.scss';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    Username: '',
    lastName: '',
    firstName: '',
  }

  inputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      email,
      password,
      Username,
      lang,
      firstName,
      lastName,
    } = this.state;

    return (
      <div className="app">
        <SignUp
          onSubmitForm={this.submitLogin}
          dataText={sentences[lang].login}
          lastName={lastName}
          firstName={firstName}
          Username={Username}
          email={email}
          onInputChange={this.inputChange}
          password={password}
        />
      </div>
    );
  }
}


export default LoginPage;
