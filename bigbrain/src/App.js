import React, { useState } from "react";
import {HeaderContainer} from "./container/index.js";
import "./assets/style/index.sass";
import "./assets/icon/css/fontello.css";
import {BrowserRouter,Link} from "react-router-dom";
import Routes from './router'
import { LogInPage } from "./components/index.js"
import store from "./redux/store";
import { AppContext } from "./libs/contextLib";

function App() {

    return (

        <BrowserRouter>
            <>
                <HeaderContainer />
                <Routes/>
            </>
        </BrowserRouter>

    );
}

export default App;
