import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from "./store/favorites-context";
import { LaterContextProvider } from "./store/later-context";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <FavoritesContextProvider>
        <LaterContextProvider>
            <BrowserRouter>
                <App /> 
            </BrowserRouter>
        </LaterContextProvider>
    </FavoritesContextProvider>
, document.getElementById("root"));
