import classes from "./MovieItem.module.css";
import FavoritesContext from '../../store/favorites-context';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useContext } from 'react';
import Card from "../UI/Card";
import LaterContext from "../../store/later-context";

const MovieItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemsIsFavorite(props.id);
  const laterCtx = useContext(LaterContext);
  const itemIsLater = laterCtx.itemsIsLater(props.id);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  console.log("image",props.poster)

  const toogleFavoriteStatusHandler = () => {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        poster: props.poster,
        title: props.title,
        genres: props.genres, 
        year:props.year
      });
    }
    console.log(itemIsFavorite)
  }

  const toogleLaterStatusHandler = () => {
    if(itemIsLater){
      laterCtx.removeLater(props.id)
    } else {
      laterCtx.addLater({
        id: props.id,
        poster: props.poster,
        title: props.title,
        genres: props.genres, 
        year:props.year
      });
    }
    console.log(itemIsLater)
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
    <span className={classes.fav} onClick={toogleFavoriteStatusHandler}><Checkbox {...label} icon={<FavoriteBorder color="primary" />} checkedIcon={<Favorite />} />{itemIsFavorite}</span>
    <span className={classes.later} onClick={toogleLaterStatusHandler}><Checkbox {...label} icon={<WatchLaterOutlinedIcon color="primary" />} checkedIcon={<WatchLaterIcon />} />{itemIsLater}</span>
    </Card> 
  )
};

export default MovieItem;