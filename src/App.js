import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import ImageList from './components/ImageList/ImageList';


class App extends Component {
  state = {
    loading: false,
    images: []
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = () => {
    axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: 20,
      },
      headers: {
        Authorization: 'Client-ID y2pheNRSCVBvPOgdZ29TwMu7p3gn0DLgcqCzdEXvWGM'
      }
    })
      .then(response => {
        this.setState({ images: [...this.state.images, ...response.data] });
        console.log(response.data);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response);
        }
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ImageList foundImages={this.state.images} />
        <Loader />
      </div>
    );
  }
}

export default App;
