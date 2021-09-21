import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './Components/Layout/Layout';
import store from './redux/store';

import './Style.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/one" exact />
          <Route path="/:question" component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
