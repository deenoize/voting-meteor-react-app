import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { render } from 'react-dom';

import MainLayout from './Layouts/MainLayout';
import App from './App';

Meteor.startup(() => {
  render(
    <Router>
      <div>
        <Route exact path='/' component={MainLayout} />
        <Route exact path='/' component={App} />
      </div>
    </Router>,
    document.getElementById('render-target')
  );
});
