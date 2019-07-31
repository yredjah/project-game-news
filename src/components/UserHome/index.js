import React, { Component } from 'react';
import { Menu, Form, Input, Checkbox, Button, Select } from 'semantic-ui-react';

import './userhome.scss';

class UserHome extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div id="user-home">
      <div id="user-menu">
        <Menu inverted vertical>
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} 
          />
          <Menu.Item
            name='avatar'
            active={activeItem === 'avatar'}
            onClick={this.handleItemClick}
          />
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
        </Menu>
      </div>
    </div>
    )
  }
}

export default UserHome; 

