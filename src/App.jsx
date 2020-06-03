import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import AllBeers from './views/AllBeers';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:beerId" component={SingleBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
