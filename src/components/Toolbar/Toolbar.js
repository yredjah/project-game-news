import React from 'react';

import './Toolbar.scss';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar_logo"><a href="/">Gaming News</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Test</a></li>
          <li><a href="/">Test</a></li>
          <li><a href="/">Test</a></li>

        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
