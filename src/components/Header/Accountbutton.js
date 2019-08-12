import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  Button, 
  Icon, 
  Dropdown, 
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './header.scss';

function handleLogOut() {
  sessionStorage.clear();
  window.location.reload();
}
const options = [
  {
    key: 'user', text: 'Account', icon: 'user', as: Link, to: '/user',
  },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  {
    key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: handleLogOut,
  },
];

const AccountButton = ({ avatar }) => {
  const trigger = (
    <span>
      <Image src={`/public/avatarUploads/${avatar}`} size='mini' circular />
    </span>
  );
  return (
    <div id="AccountButton">
      <Dropdown trigger={trigger} options={options} pointing="top right" icon={null} />
      {/* <div>
        <Link to="/user" exact><Button onClick={handleClose} className="lg" >Profile</Button></Link>
        <Link to="/" exact><Button onClick={handleLogOut} className="lg">Log out</Button></Link>
      </div> */}
    </div>
  );
};

AccountButton.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default AccountButton;
