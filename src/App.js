import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    loading: false
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Loader />
      </div>
    );
  }
}

export default App;
