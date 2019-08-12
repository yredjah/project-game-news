// == Import : npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Segment,
  Dropdown,
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import logo1 from './logo.png';

import AccountButton from './Accountbutton';
// import Hambergertton from './Hambergertton';

// == Import : local
import './header.scss';
import './responsiveHeader.scss';


// == Composants
const Header = ({
  activeItem,
  setItem,
  genres,
  categories,
  getAllPlateforms,
  getAllGenres,
  avatar,
  userInfo,
}) => {
  const handleItemClick = (e, { name }) => setItem(name);
  // const options = genres;
  useEffect(() => {
    getAllPlateforms();
    getAllGenres();
    userInfo();
  }, []);
  userInfo();
  return (
    <div className="header">
      <div className="container-head">
        <Link to="/" exact><h1 id="title"><img className="logo" src={logo1} alt="" />Game news</h1></Link>
        {/* <Link to="/" exact><img id="logo2" src={logo2} alt="" /></Link> */}
        <div className="container-head-right">
          {JSON.parse(sessionStorage.getItem('token'))
            && <div><AccountButton avatar={avatar} /></div>
          }
          {!JSON.parse(sessionStorage.getItem('token'))
            && (
            <div>
              <Link
                to="/Sign_Up"
                exact
              >
                <Button className="lg button" primary>Sign-Up</Button>
              </Link>
              <Link
                to="/login"
                exact
              >
                <Button className="lg button">Login</Button>
              </Link>
            </div>
            )
          }
        </div>
      </div>
      <Segment inverted className="nav">
        <Menu className="nav-menu" inverted secondary>
          {categories.map(category => (
            <Menu.Item
              className="nav-menu-1"
              key={category.id}
              name={category.name}
              active={activeItem === category.name}
              onClick={handleItemClick}
            />
          ))}
          <Menu.Item
            className="nav-menu-2"
            active={activeItem === 'GAMES'}
          >
            <Dropdown text="TYPES" simple item>
              <Dropdown.Menu>
                {genres.map(genre => (
                  <Dropdown.Item key={genre.id} text={genre.name} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
        <div className="searchBar">
          <input id="seachinput" type="text" icon="search" placeholder="   Search..." />
        </div>
      </Segment>
    </div>
  );
};

Header.propTypes = {
  activeItem: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  getAllPlateforms: PropTypes.func.isRequired,
  getAllGenres: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  userInfo: PropTypes.func.isRequired,
};

// == Export
export default Header;
