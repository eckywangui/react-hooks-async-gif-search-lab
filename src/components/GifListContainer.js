import React, { Component } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  handleSearch = (query) => {
    const apiKey = 'wmWpRP06yj4Rll97GSB63YeiQVeGeFiy';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data.slice(0, 3) });
      });
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
