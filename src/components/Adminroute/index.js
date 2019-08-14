import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Import : local
import AdminPanel from 'src/containers/Adminroute/AdminPanel';

// == Composant
const Adminroute = ({ role }) => {
  const checkRole = () => {
    if (role === 'admin') {
      return (
        <Route path="/user/admin" exact component={AdminPanel} />
          
      );
    }
  };
  return (
    <div>
      {checkRole()}
    </div>
  );
};


Adminroute.propTypes = {
  role: PropTypes.string.isRequired,
};
// == Export
export default Adminroute;
