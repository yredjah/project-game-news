// == Import : npm
import React, { Component } from 'react';
import {
  Menu,
  Segment,
  Input,
  Icon,
} from 'semantic-ui-react';

// == Import : local
import './header.scss';


// == Composant
class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div className="header">
        <div className="container-head">
          <h1><img className="logo" src="src/Assets/img/logo.jpg"></img>Game news</h1>
          <div className="container-head-right">
            <Icon.Group size="big">
              <Icon size="big" name="circle outline" />
              <Icon name="user" />
            </Icon.Group>
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
