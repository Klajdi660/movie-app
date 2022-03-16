import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MovieItem from '../../components/Movie/MovieItem';
import classes from "./Favorites.module.css";


const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext);
    
    return(
        <section className={classes.section}>
            <h1>Favorites Movies</h1>
            {favoritesCtx.totalFavorites === 0 ? (
                <p> You got no movies yet. Start adding some movies</p>
            ):(
                favoritesCtx.favorites.map((movieItem) => (
                    <MovieItem 
                        key={movieItem.id}
                        id={movieItem.id}
                        poster={movieItem.poster}
                        title={movieItem.title}
                        year={movieItem.year}
                        genres={movieItem.genres}
                    />
                ))
            )}
        </section>
    );
};

export default Favorites;