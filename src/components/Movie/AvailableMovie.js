import MovieItem from "./MovieItem";
import classes from "./AvailableMovie.module.css";

const AvailableMovie = (props) => {
  return (
    <div className={classes.home}>
      {props.moviesList.map((movieItem) =>{
        return(
          <MovieItem
            key={movieItem.id}
            id={movieItem.id}
            poster={movieItem.posterUrl}
            title={movieItem.title}
            year={movieItem.year}
            genres={movieItem.genres}
          />
        )
      })}
    </div>
  );
};

export default AvailableMovie;