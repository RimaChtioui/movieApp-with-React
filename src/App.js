import React, { Component } from "react";
import MovieContainer from "./MovieContainer";
import Data from "./Data.json";

class App extends Component {
  render() {
    return (
      <div className="movie-container">
        <MovieContainer movieList={Data} />
      </div>
    );
  }
}

export default App;
