import classes from "./MovieItem.module.css";
import FavoritesContext from '../../store/favorites-context';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useContext } from 'react';
import Card from "../UI/Card";

const MovieItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemsIsFavorite(props.id);

  console.log("image",props.image)

  const toogleFavoriteStatusHandler = () => {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        posterUrl: props.posterUrl,
        title: props.title,
        genres: props.genres, 
        year:props.year
      });
    }
    console.log(itemIsFavorite)
  }

  return(
    <Card key={props.id}>
      <img
        className={classes.poster}
        src={props.poster}
        alt={props.title}
      /> 
  
      <span className={classes.title}>{props.title} 
        (<span className={classes.title}>{props.year}</span>)
      </span>
      <span className={classes.subTitle}>{props.genres && props.genres.map((movie, index) => {
        return(
          <>
            {index ? ' ' : ''} {movie}
          </>
        )})}
      </span>
    <span className={classes.fav} onClick={toogleFavoriteStatusHandler}><FavoriteBorderIcon />{itemIsFavorite}</span>
    </Card> 
  )
};

export default MovieItem;