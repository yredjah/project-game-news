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
  lastName,
  firstName,
  userName,
  email,
  password,
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
            name="lastName"
            placeholder="Your Name *"
            type="lastName"
            value={lastName}
          />
          <Field
            name="firstName"
            placeholder="Your Firstname *"
            type="firstName"
            value={firstName}
          />
          <Field
            name="userName"
            placeholder="Your Username *"
            type="userName"
            value={userName}
          />
          <Field
            name="email"
            placeholder="Your Email *"
            type="email"
            value={email}
          />
          <Field
            name="password"
            placeholder="Your Password *"
            type="password"
            value={password}
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
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

// == export
export default SignUp;
