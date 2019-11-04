import React, { Component } from 'react';
import { Router, browserHistory, hashHistory, Route } from 'react-router';
import Feed from './pages/feed';
import Profile from './pages/profile';
import AboutUs from './pages/aboutus';
import './App.css';
import logger from "redux-logger";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { reducer } from './reducer/index';

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Router history={browserHistory}>

          <Route path="/" component={Feed}/>

          <Route path="/profile" component={Profile}/>

          <Route path="/about" component={AboutUs}/>

        </Router>
      </Provider>

    );

  }

}

export default App;
