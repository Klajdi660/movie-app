import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: () => {},
    removeFavorite: () => {},
    itemsIsFavorite: () => {}
});

export function FavoritesContextProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    const addFavoriteHandler = (favoriteMovie) => {
        setFavorites((prevFavorite) => {
           return prevFavorite.concat(favoriteMovie);
        });
    }
    const removeFavoriteHandler = (movieId) => {
        setFavorites((prevFavorite) => {
            return prevFavorite.filter(movie => movie.id !== movieId);
        })
    }
    const itemIsFavoriteHandler = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const context = {
        favorites: favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
