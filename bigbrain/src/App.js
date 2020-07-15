import React, { useState, } from "react";
import {HeaderContainer} from "./container/index.js";
import "./assets/style/index.sass";
import "./assets/icon/css/fontello.css";
import {BrowserRouter} from "react-router-dom";
import Routes from './router'


function App() {

    return (

        <BrowserRouter>
            <div>
                <HeaderContainer />
                <Routes/>
            </div>
        </BrowserRouter>

    );
}

export default App;
