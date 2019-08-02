// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// == import : local
import Field from 'src/containers/Login/LoginForm';
import dataText from './data/texts';
import 'src/components/Login/login.scss';

// == composant
const SignUp = ({
  registerLastName,
  registerFirstName,
  registerUserName,
  registerEmail,
  registerPassword,
  onSubmitForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };

  return (
    <div className="app">
      <div id="login">
        <h1 className="app-title">{dataText.login.title}</h1>
        <p className="app-desc">{dataText.login.desc}</p>
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="registerLastName"
            placeholder="Your Name *"
            type="lastName"
            value={registerLastName}
          />
          <Field
            name="registerFirstName"
            placeholder="Your Firstname *"
            type="firstName"
            value={registerFirstName}
          />
          <Field
            name="registerUserName"
            placeholder="Your Username *"
            type="userName"
            value={registerUserName}
          />
          <Field
            name="registerEmail"
            placeholder="Your Email *"
            type="email"
            value={registerEmail}
          />
          <Field
            name="registerPassword"
            placeholder="Your Password *"
            type="password"
            value={registerPassword}
          />
          <button
            className="form-submit form-submit--login"
            type="submit"
          >
            {dataText.login.submit}
          </button>
          <Link
            to="/login"
            exact
          >
            <a className="app-link">
              {dataText.login.link}
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  registerLastName: PropTypes.string.isRequired,
  registerFirstName: PropTypes.string.isRequired,
  registerUserName: PropTypes.string.isRequired,
  registerEmail: PropTypes.string.isRequired,
  registerPassword: PropTypes.string.isRequired,
};

// == export
export default SignUp;
