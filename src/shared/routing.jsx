import React from "react";

import {Switch, Route} from "react-router-dom";

import LandingPage from "../components/LandingPage";
import Omw from "../components/Omw";
import Food from "../components/Food";
import Lekar from '../components/lekar';
import Snapsvisor from '../components/snapsvisor';

const Routing = ({user}, logOut) => {
    return (
        <Switch>
            <Route exact={true} path="/" render={() => <LandingPage logOut={logOut} user={user} />} />
            <Route path="/home" render={() => <LandingPage logOut={logOut} user={user} />} />
            <Route path="/omw" render={() => <Omw user={user} />} />
            <Route path="/food" render={() => <Food user={user} />} />
            <Route path="/lekar" render={() => <Lekar user={user} />} />
            <Route path="/snapsvisor" render={() => <Snapsvisor user={user} />} />
        </Switch>
    );
};

export default Routing;
