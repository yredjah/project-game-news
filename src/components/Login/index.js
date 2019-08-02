// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import dataText from 'src/data/texts';
import Field from 'src/containers/Login/LoginForm';
import './login.scss';

// == composant
const Login = ({
  loginEmail,
  loginPassword,
  // onInputChange,
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
            name="loginEmail"
            placeholder="Your Email *"
            type="email"
            value={loginEmail}
            // onInputChange={onInputChange}
          />
          <Field
            name="loginPassword"
            placeholder="Your Password *"
            type="password"
            value={loginPassword}
            // onInputChange={onInputChange}
          />
          <button
            className="form-submit form-submit--login"
            type="submit"
          >
            {dataText.login.submit}
          </button>
        </form>
        <Link to="/password" exacte>
          <a className="app-link">
            {dataText.login.link}
          </a>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  loginEmail: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
};

// == export
export default Login;
