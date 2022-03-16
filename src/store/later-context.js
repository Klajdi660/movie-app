import { createContext, useState } from "react";

const LaterContext = createContext({
    later: [],
    totalLater: 0,
    addLater:(laterMovie) => {},
    removeLater:(movieId) => {},
    itemsIsLater:(movieId) => {}
});

export function LaterContextProvider(props) {
    console.log("prop",props);
    const [later, setLater] = useState([]);

    function addLaterHandler(laterMovie){
        setLater((prevLater) => {
           return prevLater.concat(laterMovie);
        });
    }

    function removeLaterHandler(movieId){
        setLater((prevLater) => {
            return prevLater.filter(movie => movie.id !== movieId);
        })
    }

    function itemIsLaterHandler(movieId){
        return later.some(movie => movie.id === movieId);
    }

    const context = {
        later: later,
        totalLater: later.length,
        addLater: addLaterHandler,
        removeLater: removeLaterHandler,
        itemsIsLater: itemIsLaterHandler
    };

    return <LaterContext.Provider value={context}>
        {props.children}
    </LaterContext.Provider>
}

export default LaterContext;