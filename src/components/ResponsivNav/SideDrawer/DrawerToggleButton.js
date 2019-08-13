import React from 'react';
import PropTypes from 'prop-types';

import './DrawerToggleButton.scss';

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
    <div className="toggle-button_line"/>
  </button>
);

export default DrawerToggleButton;
