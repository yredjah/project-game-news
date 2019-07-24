// == Import : npm
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';

// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="link">
      <Link to="/Contact" exact><a href="">contact</a></Link>
      <a href="">mention légale</a>
      <Link to="/" exact><a href="">accueil</a></Link>
    </div>
    <p>&copy; 2019 Game news</p>
    <div className="icons">
      <Icon name="twitter square" size="big" color="blue" />
      <Icon name="facebook square" size="big" color="blue" />
    </div>
  </div>
);

// == Export
export default Footer;
