import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Menu,
  Segment,
  Dropdown,
} from 'semantic-ui-react';

import './SideDrawer.scss';

const SideDrawer = ({
  activeItem,
  setItem,
  genres,
  categories,
  getAllPlateforms,
  getAllGenres,
  // avatar,
  userInfo,
  show,
}) => {
  let cssClassNames = 'side-drawer';
  if (show) {
    cssClassNames = 'side-drawer open';
  }
  const handleItemClick = (e, { name }) => setItem(name);
  // const options = genres;
  useEffect(() => {
    getAllPlateforms();
    getAllGenres();
    userInfo();
  }, []);
  userInfo();

  return (
    <nav className={cssClassNames}>
      <h1>PLATFORMS</h1>
      <Segment inverted className="nav">
        <Menu className="nav-menu" inverted secondary>
          {categories.map(category => (
            <Link
              to={`/sort/plateform/${category.name}`}
              exact
            >
              <Menu.Item
                className="nav-menu-1"
                key={category.id}
                name={category.name}
                active={activeItem === category.name}
                onClick={handleItemClick}
              />
            </Link>
          ))}
          <Menu.Item
            className="nav-menu-2"
            active={activeItem === 'GAMES'}
          >
            <Dropdown text="TYPES" simple item>
              <Dropdown.Menu>
                {genres.map(genre => (
                  <Dropdown.Item key={genre.id} text={genre.name} as={Link} to={`/sort/genre/${genre.name}`} />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Segment>
    </nav>
  );
};

SideDrawer.propTypes = {
  show: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  getAllPlateforms: PropTypes.func.isRequired,
  getAllGenres: PropTypes.func.isRequired,
  // avatar: PropTypes.string.isRequired,
  userInfo: PropTypes.func.isRequired,
};
export default SideDrawer;
