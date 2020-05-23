import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import Characters from './components/characters';
import Episodes from './components/episodes';
import NotFound from './components/notfound';


function App() {
  return (
    <Switch>
      <Route path="/characters/:id/episodes" component={Episodes} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/characters" />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
