// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Article from 'src/containers/Article';
import SignUp from 'src/containers/SignUp';
import Login from 'src/containers/Login';
import ForgottenPassword from 'src/containers/ForgottenPassword';
import Legal from 'src/components/Legal';
import Contact from 'src/containers/Contact';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <nav>
      <Header />
    </nav>
    <main>
      <Route path="/Sign_Up" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/password" exact component={ForgottenPassword} />
      <Route path="/" exact component={Home} />
      <Route path="/article/:id" exact component={Article} />
      <Route path="/mention_legale" exact component={Legal} />
      <Route path="/contact" exact component={Contact} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

// == Export
export default App;
