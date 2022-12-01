import { createContext, useState } from "react";

const LaterContext = createContext({
    later: [],
    totalLater: 0,
    addLater: () => {},
    removeLater: () => {},
    itemsIsLater: () => {}
});

export function LaterContextProvider({children}) {
    const [later, setLater] = useState([]);

    const addLaterHandler = (laterMovie) => {
        setLater((prevLater) => {
           return prevLater.concat(laterMovie);
        });
    }
    const removeLaterHandler = (movieId) => {
        setLater((prevLater) => {
            return prevLater.filter(movie => movie.id !== movieId);
        })
    }
    const itemIsLaterHandler = (movieId) => {
        return later.some(movie => movie.id === movieId);
    }

    const context = {
        later: later,
        totalLater: later.length,
        addLater: addLaterHandler,
        removeLater: removeLaterHandler,
        itemsIsLater: itemIsLaterHandler
    };

    return (
        <LaterContext.Provider value={context}>
            {children}
        </LaterContext.Provider>
    );
}

export default LaterContext;
