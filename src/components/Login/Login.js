// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == import : local
import Field from 'src/components/Login/LoginForm';

// == composant
const Login = ({
  onChangeView,
  email,
  password,
  onInputChange,
  dataText,
  onSubmitForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitForm();
  };

  return (
    <div id="login">
      <h1 className="app-title">{dataText.title}</h1>
      <p className="app-desc">{dataText.desc}</p>
      <form className="form" onSubmit={handleSubmit}>
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
      </form>
      <a className="app-link" onClick={onChangeView}>
        {dataText.link}
      </a>
    </div>
  );
};

Login.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
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
export default Login;
