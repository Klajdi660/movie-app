import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from "./store/favorites-context";

import "./index.css";
import App from "./App";
import { LaterContextProvider } from "./store/later-context";

ReactDOM.render(
    <FavoritesContextProvider>
        <LaterContextProvider>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </LaterContextProvider>
    </FavoritesContextProvider>
, document.getElementById("root"));