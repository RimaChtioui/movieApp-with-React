import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import AddMovie from "./AddMovie";
import { Button, FormControl } from "react-bootstrap";
import MovieCard from "./MovieCard";
import WithLoading from "./WithLoading";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <FormControl
        type="text"
        placeholder="Search..."
        onChange={e => props.getSearchValue(e.target.value)}
      />
      <Button type="submit" bsStyle="primary">
        <i className="fas fa-search" />
      </Button>
    </div>
  );
};

class RatingBar extends Component {
  constructor() {
    super();
    this.state = {
      rating: 1
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue
    });
    this.props.getSearchValue(this.state.rating);
  }

  render() {
    const { rating } = parseInt(this.state);
    console.log("rating new", this.state.rating);

    return (
      <div className="rating-bar">
        <h5>Minimum rating: {rating}</h5>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
    );
  }
}

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {this.props.movieList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    );
  }
}

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movieList,
      searchValue: "",
      searchRating: 1
    };
  }
  getSearchValuerating = value => {
    this.setState({
      searchRating: value
    });
    console.log("am here", this.state.searchRating);
  };

  getSearchValue = value => {
    this.setState({
      searchValue: value
    });
  };

  addMovieToList = movie => {
    this.setState({
      movies: this.state.movies.concat(movie)
    });
  };

  render() {
    let filteredMovies = [];
    filteredMovies = this.state.movies.filter(
      movie =>
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchValue.toLowerCase()) !== -1 &&
        movie.imdbRating > this.state.searchRating
    );
    console.log(this.state.movies);
    return (
      <div>
        <div className="header">
          <h1>Movie App</h1>
          <div className="header-search">
            <SearchBar getSearchValue={this.getSearchValue} />
            <RatingBar getSearchValue={this.getSearchValuerating} />
          </div>
        </div>
        <MovieList movieList={filteredMovies} />
        <AddMovie addMovieFunction={this.addMovieToList} />
      </div>
    );
  }
}

export default WithLoading(MovieContainer);
