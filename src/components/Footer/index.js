// == Import : npm
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="link">
      <a href="">contact</a>
      <Link to="/mention_legale" exact>
        <a href="">mention légale</a>
      </Link>
      <a href="">accueil</a>
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
