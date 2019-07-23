import React from 'react';

import sentences from './data/texts';

import SignUp from './SignUp';

import 'src/components/Login/login.scss';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: '',
    lang: 'fr',
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
          email={email}
          onInputChange={this.inputChange}
          password={password}
        />
      </div>
    );
  }
}


export default LoginPage;
