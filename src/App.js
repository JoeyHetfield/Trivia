import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Games from './pages/Games';
import Settings from './pages/Settings';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/games" component={ Games } />
      <Route exact path="/settings" component={ Settings } />
    </Switch>
  );
}

export default App;
