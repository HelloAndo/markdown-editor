import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './store/index'

import './App.scss';

import Write from './pages/Write'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Write />
        </div>
      </Provider>
    );
  }
}

export default App;
