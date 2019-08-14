// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/containers/Header';
import Home from 'src/containers/Home';
import Footer from 'src/components/Footer';
import Article from 'src/containers/Article';
import SignUp from 'src/containers/SignUp';
import Login from 'src/containers/Login';
import ForgottenPassword from 'src/containers/ForgottenPassword';
import Legal from 'src/components/Legal';
import User from 'src/components/User';
import Contact from 'src/containers/Contact';
import SortArticles from 'src/containers/SortArticles';
import ResponsivNav from 'src/components/ResponsivNav';
import SortArticlesByGame from 'src/containers/SortArticlesByGame';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">

    <div id="navbar">
      <Header />
    </div>
    <div className="responsiv-navbar">
      <ResponsivNav />
    </div>
    <main>
      <Route path="/Sign_Up" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/password" exact component={ForgottenPassword} />
      <Route path="/" exact component={Home} />
      <Route path="/article/:id" exact component={Article} />
      <Route path="/mention_legale" exact component={Legal} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/user" component={User} />
      <Route path="/sort/:type/:category" exact component={SortArticles} />
      <Route path="/games/:name/:id" exact component={SortArticlesByGame} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
