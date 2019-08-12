/* eslint-disable react/button-has-type */
import React from 'react';
import './drawer.scss';

const DrawerToggleButton = () => (
  <button className="toggle-button">
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default DrawerToggleButton;
