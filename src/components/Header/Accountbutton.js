import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon, Dropdown } from 'semantic-ui-react';


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

const AccountButton = () => {

  const trigger = (
    <span>
      <Icon.Group color="primary" size="huge">
        <Icon size="small" name="user circle" />
      </Icon.Group>
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

export default AccountButton;
