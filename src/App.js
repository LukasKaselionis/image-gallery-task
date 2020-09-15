import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import ImageList from './components/ImageList/ImageList';
import Button from './components/UI/Button';
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {
  state = {
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
        setTimeout(() => {
          this.setState({ images: [...this.state.images, ...response.data] });
        }, 500);
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
        <Button />
        <InfiniteScroll
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <ImageList foundImages={this.state.images} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
