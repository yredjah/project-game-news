// == import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == import : local
import Field from 'src/components/Login/LoginForm';


// == composant
const ForgottenPassword = ({
  dataText,
  onChangeView,
  email,
  onInputChange,
}) => (
  <div id="password">
    <a
      className="app-link app-link--back"
      onClick={onChangeView}
    >
      {dataText.link}
    </a>
    <h1 className="app-title">{dataText.title}</h1>
    <p className="app-desc">{dataText.desc}</p>
    <form className="form">
      <Field
        name="email"
        placeholder="Votre Email *"
        type="email"
        value={email}
        onInputChange={onInputChange}
      />
      <button
        className="form-submit"
        type="submit"
      >
        {dataText.submit}
      </button>
    </form>
  </div>
);

ForgottenPassword.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  dataText: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    submit: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

// == export
export default ForgottenPassword;
