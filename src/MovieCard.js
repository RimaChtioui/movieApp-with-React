import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = props => {
  return (
    <div className="movie-card">
      <div className="movie-card-link">
        <img
          src={props.movie.poster}
          width="348px"
          height="380px"
          alt="movie-poster"
        />
        <div className="movie-card-text">
          <div className="text">{props.movie.plot}</div>
        </div>
      </div>
      <div className="movie-card-sub">
        <h3>{props.movie.title}</h3>
        <span>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={props.movie.imdbRating}
          />
        </span>
      </div>
    </div>
  );
};

console.log(StarRatingComponent);
export default MovieCard;
