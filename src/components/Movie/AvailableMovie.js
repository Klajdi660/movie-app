import MovieItem from "./MovieItem";
import classes from "./AvailableMovie.module.css";

const AvailableMovie = (props) => {
  const {moviesList} = props;
  
  const movies = moviesList.map((movieItem) => {
    return (
      <MovieItem
        key={movieItem.id}
        id={movieItem.id}
        poster={movieItem.posterUrl}
        title={movieItem.title}
        year={movieItem.year}
        genres={movieItem.genres}
      />
    )
  });

  return (
    <div className={classes.home}>
      {movies}
    </div>
  );
};

export default AvailableMovie;
