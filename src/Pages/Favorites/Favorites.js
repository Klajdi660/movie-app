import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MovieItem from '../../components/Movie/MovieItem';


const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if(favoritesCtx.totalFavorites === 0){
        content = <p> You got no movies yet. Start adding some movies</p>
    } else {
        content = <MovieItem data={favoritesCtx.favorites} />
        console.log('content',content);
    }
    return (
        <section>
            <h1> Favorites Movies </h1>
            {content}
         </section>
    );
}

export default Favorites;