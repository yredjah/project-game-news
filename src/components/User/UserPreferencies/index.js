import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './userPreferencies.scss';

const UserPreferencies = ({ genres, plateforms, getUserPreferencies, preferencies, sendUserPreferencies, delUserPreferencies }) => {
  useEffect(() => {
    getUserPreferencies();
  }, []);

  const handleAdd = (name, category) => (() => {
    sendUserPreferencies(name, category);
  });
  const handleDel = (name, category) => (() => {
    delUserPreferencies(name, category);
  });

  const check = (element, thePreferencies, category) => {
    let liked = false;
    thePreferencies.forEach((preference) => {
      if (preference.name === element.name) {
        liked = true;
      }
    });
    if (liked === true) {
      return (
        <div>
          {/* <input className="prefered" type="button" id={element.id} value={element.name} onClick={handleDel(element.name, category)} /> */}
          <button type="button" className="prefered" id={element.id} value={element.name} onClick={handleDel(element.name, category)} >{element.name}</button>
        </div>
      );
    }
    return (
      <div>
        <button type="button" className="preferencies-button" id={element.id} value={element.name} onClick={handleAdd(element.name, category)} >{element.name}</button>
        {/* <input className="preferencies-button" type="button" id={element.id} value={element.name} onClick={handleAdd(element.name, category)} /> */}
      </div>
    );
  };

  return (
    <div className="userInfo UserPreferencies">
      <h2>preferencies</h2>
      <div className="preferencies-form">
        <div>
          <h3>genres</h3>
          {
            genres.map(genre => (
              check(genre, preferencies.genres, 'genre')
            ))
          }
        </div>
        <div>
          <h3>plateforms</h3>
          {
            plateforms.map(plateform => (
              check(plateform, preferencies.plateforms, 'plateform')
            ))
          }
        </div>
      </div>
    </div>
  );
};


UserPreferencies.propTypes = {};
export default UserPreferencies;
