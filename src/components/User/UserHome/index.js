import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './userhome.scss';

const UserHome = ({
  userInfo,
  userName,
  firstName,
  lastName,
  mail,
}) => {
  useEffect(() => {
    userInfo();
  }, []);

  userInfo();

  return (
    <div className="userInfo">
      <ul className="infoUser">
        <li className="infos"><span className="infoClasse">Username:</span> {userName}</li>
        <li className="infos"><span className="infoClasse">Firstname:</span> {firstName}</li>
        <li className="infos"><span className="infoClasse">Lastname:</span> {lastName}</li>
        <li className="infos"><span className="infoClasse">Mail:</span> {mail}</li>
      </ul>
    </div>
  );
};


UserHome.propTypes = {
  userInfo: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};
export default UserHome;
