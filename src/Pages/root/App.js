import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Auth from '../auth/Auth';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
