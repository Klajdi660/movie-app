import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import LaterContext from "../../store/later-context";
import Card from "../UI/Card";
import { Checkbox } from '@mui/material';
import { 
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
  WatchLaterOutlined as WatchLaterOutlinedIcon,
  WatchLater as WatchLaterIcon
} from '@mui/icons-material';
import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const {id, poster, title, genres, year} = props;
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemsIsFavorite(id);
  const laterCtx = useContext(LaterContext);
  const itemIsLater = laterCtx.itemsIsLater(id);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const toogleFavoriteStatusHandler = () => {
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id: id,
        poster: poster,
        title: title,
        genres: genres, 
        year: year
      });
    }
  }

  const toogleLaterStatusHandler = () => {
    if(itemIsLater){
      laterCtx.removeLater(id)
    } else {
      laterCtx.addLater({
        id: id,
        poster: poster,
        title: title,
        genres: genres, 
        year: year
      });
    }
  }

  return(
    <Card>
      <img
        className={classes.poster}
        src={poster}
        alt={title}
      /> 
      <span className={classes.title}>
        {title} 
        (<span className={classes.title}>{year}</span>)
      </span>
      <span className={classes.subTitle}>
        {genres && genres.map((movie, index) => (
          <div key={index}>
            {index ? ' ' : ''} {movie}
          </div>
        ))}
      </span>
      <span className={classes.fav} onClick={toogleFavoriteStatusHandler}>
        <Checkbox 
          {...label} 
          icon={<FavoriteBorderIcon color="primary" />} 
          checkedIcon={<FavoriteIcon />} 
        />
        {itemIsFavorite}
      </span>
      <span className={classes.later} onClick={toogleLaterStatusHandler}>
        <Checkbox 
          {...label} 
          icon={<WatchLaterOutlinedIcon color="primary" />} 
          checkedIcon={<WatchLaterIcon />} 
        />
        {itemIsLater}
      </span>
    </Card> 
  )
};

export default MovieItem;
