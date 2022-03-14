import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite:(favoriteMovie) => {},
    removeFavorite:(movieId) => {},
    itemsIsFavorite:(movieId) => {}
});

export function FavoritesContextProvider(props) {
    console.log("prop",props);
    const [favorites, setFavorites] = useState([]);

    function addFavoriteHandler(favoriteMovie){
        setFavorites((prevFavorite) => {
           return prevFavorite.concat(favoriteMovie);
        });
    }

    function removeFavoriteHandler(movieId){
        setFavorites((prevFavorite) => {
            return prevFavorite.filter(movie => movie.id !== movieId);
        })
    }

    function itemIsFavoriteHandler(movieId){
        return favorites.some(movie => movie.id === movieId);
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;