import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// == Import : local
import './user.scss';
import UserHome from 'src/containers/UserHome';
import UserAvatar from 'src/components/User/UserAvatar';
import UserPreferencies from 'src/containers/UserPreferencies';
import logo from './broken.png';

// == Composant
class User extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        {JSON.parse(sessionStorage.getItem('token'))
        && (
        <div id="user-home">
          <div id="user-menu">
            <Menu inverted compact  size='tiny'>
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
              <Link to="/user/Preferencies" exact>
                <Menu.Item
                  name='preferencies'
                  active={activeItem === 'preferencies'}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Link to="/user/admin" exact>
                <Menu.Item
                  name='admin'
                  active={activeItem === 'admin'}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu>
          </div>
          <div className="left-container">
            <Route path="/user" exact component={UserHome} />
            <Route path="/user/Avatar" exact component={UserAvatar} />
            <Route path="/user/Preferencies" exact component={UserPreferencies} />
          </div>
        </div>
        )}
        {!JSON.parse(sessionStorage.getItem('token'))
        && (
          <div>
            <h1 className="error">YOU ARE NOT L0GIN </h1>
            <img id="logo" src={logo} alt="" />
            <div>
              <Link to="/login" exact> <h1>Please Sign in to Access your account</h1> </Link>
              <h3>Or</h3>
              <Link className="link2" to="/" exact> <h1>Return to Home</h1> </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}


// == Export
export default User;
