// == Import : npm
import React from 'react';

// == Import : local
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';
import Articles from 'src/components/Articles';
import Article from 'src/components/Article';
import Footer from 'src/components/Footer';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <Header />
    <Carousel />
    <Articles />
    <Footer />
  </div>
);

// == Export
export default App;
