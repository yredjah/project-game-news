// == import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// == import : local
import Field from 'src/components/SignUp/SignUpForm';

// == composant
const SignUp = ({
  lastName,
  firstName,
  email,
  password,
  onInputChange,
  dataText,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div id="login">
      <h1 className="app-title">{dataText.title}</h1>
      <p className="app-desc">{dataText.desc}</p>
      <form className="form" onSubmit={handleSubmit}>
        <Field
          name="lastName"
          placeholder="Votre Nom *"
          type="text"
          value={lastName}
          onInputChange={onInputChange}
        />
        <Field
          name="firstName"
          placeholder="Votre Prénom *"
          type="firstName"
          value={firstName}
          onInputChange={onInputChange}
        />
        <Field
          name="email"
          placeholder="Votre Email *"
          type="email"
          value={email}
          onInputChange={onInputChange}
        />
        <Field
          name="password"
          placeholder="Votre mot de passe *"
          type="password"
          value={password}
          onInputChange={onInputChange}
        />
        <button
          className="form-submit form-submit--login"
          type="submit"
        >
          {dataText.submit}
        </button>
        <Link
          to="/login"
          exact
        >
          <a className="app-link">
            {dataText.link}
          </a>
        </Link>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  dataText: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    submit: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

// == export
export default SignUp;
