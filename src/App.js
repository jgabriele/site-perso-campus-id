import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './common/components/Header/'
import Footer from './common/components/Footer/'
import WorkPage from './WorkPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/work"><WorkPage /></Route>
          <Route path="/about">À propos</Route>
          <Route path="/" exact>Accueil</Route>
          <Route path="">404</Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
