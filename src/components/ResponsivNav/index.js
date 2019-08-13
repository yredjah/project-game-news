import React, { Component } from 'react';

import Toolbar from 'src/components/ResponsivNav/Toolbar';
import BackDrop from 'src/components/ResponsivNav/BackDrop';
import SideDrawer from 'src/containers/SideDrawer/SideDrawer';


class ResponsivNav extends Component {
  state = { sideDrawerOpen: false }

  drawerToggleclickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Toolbar drawerclickHandler={this.drawerToggleclickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />;
        {backDrop}
      </div>
    );
  }
}
// == Export
export default ResponsivNav;
