import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react';
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
  {
    key: 'Avatar', text: 'Avatar', icon: 'settings', as: Link, to: '/user/Avatar',
  },
  {
    key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: handleLogOut,
  },
];

const AccountButton = ({ avatar }) => {
  const trigger = (
    <span>
      <Image src={`/public/avatarUploads/${avatar}`} className="avatarsize" size="mini" circular />
    </span>
  );
  return (
    <div id="AccountButton">
      <Dropdown trigger={trigger} options={options} pointing="top right" icon={null} />
    </div>
  );
};

AccountButton.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default AccountButton;
