import { createContext, useState } from "react";

const LaterContext = createContext({
    later: [],
    totalLater: 0,
    addLater:(laterMovie) => {},
    removeLater:(movieId) => {},
    itemsIsLater:(movieId) => {}
});

export function LaterContextProvider(props) {
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
            {props.children}
        </LaterContext.Provider>
    );
}

export default LaterContext;
