// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  placeholder,
  name,
  onInputChange,
  value,
  type,
}) => {
  const handleChange = (evt) => {
    console.log('Changement dans le champ');
    const { name: fieldName, value: fieldValue } = evt.target;
    onInputChange(fieldName, fieldValue);
  };

  const cssClassnames = classNames('field', {
    'field--has-content': value.length > 0,
  });

  /* eslint-disable jsx-a11y/label-has-for */
  // (pous descativer la ligner 44 et 45)
  return (
    <div className={cssClassnames}>
      <input
        // React
        value={value}
        onChange={handleChange}
        // DOM
        id={`fieldid-${name}`}
        name={name}
        placeholder={placeholder}
        type={type}
        className="field-input"
      />

      <label
        htmlFor={`fieldid-${name}`}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

// == Export
export default Field;
