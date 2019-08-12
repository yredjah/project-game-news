import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Carousel from 'src/containers/Home/Carousel';
import Articles from 'src/containers/Home/Articles';

// == Composant
const Home = ({ getListArticles }) => {
  getListArticles();

  return (
    <div>
      <Carousel id="page-wrap" />
      <Articles />
    </div>
  );
};

Home.propTypes = {
  getListArticles: PropTypes.func.isRequired,
};

// == Export
export default Home;
