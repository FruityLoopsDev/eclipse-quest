// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explorer from './components/Explorer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explorer" component={Explorer} />
      </Switch>
    </Router>
  );
}

export default App;
