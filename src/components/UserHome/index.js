import React, { Component } from 'react';
import { Menu, Form, Input, Checkbox, Button, Select } from 'semantic-ui-react';

import './userhome.scss';

class UserHome extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const genderOptions = [
      { key: 'm', text: 'Hommr', value: 'homme' },
      { key: 'f', text: 'Femme', value: 'femme' },
      { key: 'o', text: 'Autre', value: 'autre' },
    ]

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
            name='favoris'
            active={activeItem === 'favoris'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='préférences'
            active={activeItem === 'préférences'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>

      <div id="user-info">
   
      </div>
    </div>
    )
  }
}

export default UserHome; 

