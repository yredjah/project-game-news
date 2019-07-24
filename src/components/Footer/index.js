// == Import : npm
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

// == Import : local

import './footer.scss';

// == Composant
const Footer = () => (
  <div id="footer">
    <div className="link">
      <Link to="/contact" exact>
        <a href="">contact</a>
      </Link>
      <Link to="/mention_legale" exact>
        <a href="">mention légale</a>
      
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
