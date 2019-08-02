import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// == Import : local
import './user.scss';
import UserHome from 'src/components/User/UserHome';
import UserAvatar from 'src/components/User/UserAvatar';

// == Composant
class User extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div id="user-home">
        <div id="user-menu">
          <Menu inverted vertical>
            <Link to="/user" exact>
              <Menu.Item
                name='home' 
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to="/user/Avatar" exact>
              <Menu.Item
                name='avatar'
                active={activeItem === 'avatar'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Menu.Item
              name='favorits'
              active={activeItem === 'favorits'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='preferencies'
              active={activeItem === 'preferencies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='admin'
              active={activeItem === 'admin'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>
        <div className="left-container">
          <Route path="/user" exact component={UserHome} />
          <Route path="/user/Avatar" exact component={UserAvatar} />
        </div>
      </div>
    );
  }
}


// == Export
export default User;
