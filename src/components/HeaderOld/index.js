// == Import : npm
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Segment,
  Input,
  Icon,
  Dropdown,
  Button,
} from 'semantic-ui-react';

// == Import : local
import './header.scss';


// == Composant
class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    const options = [
      { key: 1, text: 'MMO', value: 1 },
      { key: 2, text: 'RPG', value: 2 },
      { key: 3, text: 'ACTION', value: 3 },
      { key: 4, text: 'SPORT', value: 4 },
      { key: 5, text: 'FPS', value: 5 },
      { key: 6, text: 'ADVENTURE', value: 6 },
    ];

    return (
      <div className="header">
        <div className="container-head">
          <Link to="/" exact><h1 id="title"><img className="logo" src="src/Assets/img/logo.png" alt=""></img>Game news</h1></Link>
          <div className="container-head-right">
            <div className="log">
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
          </div>
        </div>
        <Segment inverted className="nav">
          <Menu inverted secondary>
            <Menu.Item
              name="PC"
              active={activeItem === 'PC'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="XBOX"
              active={activeItem === 'XBOX'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="PLAYSTATION"
              active={activeItem === 'PS'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="NINTENDO"
              active={activeItem === 'NINTENDO'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="IOS"
              active={activeItem === 'IOS'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="ANDROID"
              active={activeItem === 'ANDROID'}
              onClick={this.handleItemClick}
            />
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
  }
}

// == Export
export default Header;
