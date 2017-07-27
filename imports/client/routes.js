import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { render } from 'react-dom';

import MainLayout from './layouts/MainLayout';
import App from './App';
import About from './pages/About';

Meteor.startup(() => {
  render(
    <Router>
      <div>
        <Route path='/' component={MainLayout} />
        <Route exact path='/' component={App} />
        <Route exact path='/about' component={About} />
      </div>
    </Router>,
    document.getElementById('render-target')
  );
});
