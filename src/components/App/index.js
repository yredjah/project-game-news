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
import './app.scss';
import BackDrop from 'src/components/BackDrop/BackDrop';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';

// == Composant
const App = () => (
  <div id="app">

    <div id="box15">
      <Header />
    </div>
    <Toolbar />
    <SideDrawer />
    <BackDrop />
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
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
