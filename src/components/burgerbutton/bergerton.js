import React from 'react';
import DrawerToggleButton from 'src/components/burgerbutton/SideDrawer/DrawerToggleButton';
import './bergertton.scss';

const toolbar = () => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="spacer" />
      <div>
        <ul className="toolbar_navigation-items">
          <li><a href="/">hello</a></li>
          <li><a href="/">holla</a></li>
          <li><a href="/">hasta</a></li>
          <li><a href="/">lavista</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
