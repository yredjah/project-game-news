// == Import : npm
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Segment,
  Input,
  Dropdown,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AccountButton from './Accountbutton';

// == Import : local
import './header.scss';


// == Composant
const Header = ({
  activeItem,
  setItem,
  games,
  categories,
}) => {
  const handleItemClick = (e, { name }) => setItem(name);
  const options = games;
  return (
    <div className="header">
      <div className="container-head">
        <Link to="/" exact><h1 id="title"><img className="logo" src="src/Assets/img/logo.png" alt="" />Game news</h1></Link>
        <div className="container-head-right">
          {JSON.parse(sessionStorage.getItem('userData'))
            && <div><AccountButton /></div>
          }
          {!JSON.parse(sessionStorage.getItem('userData'))
            && (
            <div>
              <Link
                to="/Sign_Up"
                exact
              >
                <Button className="lg" primary>Sign Up</Button>
              </Link>
              <Link
                to="/login"
                exact
              >
                <Button className="lg">Login</Button>
              </Link>
            </div>
            )
          }
        </div>
      </div>
      <Segment inverted className="nav">
        <Menu inverted secondary>
          {categories.map(category => (
            <Menu.Item
              key={category.id}
              name={category.name}
              active={activeItem === category.name}
              onClick={handleItemClick}
            />
          ))}
          <Menu.Item
            active={activeItem === 'GAMES'}
          >
            <Dropdown className="game-menu" text="GAMES" options={options} simple item />
          </Menu.Item>
        </Menu>
        <div className="searchBar">
          <Input type="text" icon="search" placeholder="Search..." />
        </div>
      </Segment>
    </div>
  );
};

Header.propTypes = {
  activeItem: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
};

// == Export
export default Header;
