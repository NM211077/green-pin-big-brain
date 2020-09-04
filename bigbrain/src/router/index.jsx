import React from "react"
import { Switch, Route } from "react-router-dom"
import { MainContainer } from "../container/index.js"
import { LogInPage } from "../components/index.js"
import { DonationPage } from "../components/index.js"

const Routes = () => {
    return (
        <Switch>
             <Route path="/main"> <MainContainer /></Route>
            <Route path="/login"> <LogInPage /></Route>
            <Route path="/singin"> <MainContainer /></Route>
            <Route path="/donation"> <DonationPage /></Route>
            <Route path="/"> <MainContainer /></Route>
        </Switch>
    )
};

export default Routes
