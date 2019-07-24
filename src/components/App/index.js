// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import : local
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import LoginPage from 'src/components/Login';
import SignUp from 'src/components/SignUp';
import Article from 'src/components/Article';
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <nav>
      <Header />
    </nav>
    <main>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/Sign_Up" exact component={SignUp} />
      <Route path="/" exact component={Home} />
      <Route path="/article/:id" exact component={Article} />
    </main>
    <Footer />
  </div>
);

// == Export
export default App;
