import React from "react";

import {Switch, Route} from "react-router-dom";

import LandingPage from "../components/LandingPage";
import Omw from "../components/Omw";
import Food from "../components/Food";
import Lekar from '../components/Lekar';
import Snapsvisor from '../components/Snapsvisor';
import RandomThought from '../components/RandomThought';

const Routing = ({user}, logOut) => {
    return (
        <Switch>
            <Route exact={true} path="/" render={() => <LandingPage logOut={logOut} user={user} />} />
            <Route path="/home" render={() => <LandingPage logOut={logOut} user={user} />} />
            <Route path="/rsvp" render={() => <Omw user={user} />} />
            <Route path="/mat" render={() => <Food user={user} />} />
            <Route path="/lekar" render={() => <Lekar user={user} />} />
            <Route path="/snapsvisor" render={() => <Snapsvisor user={user} />} />
            <Route path="/RandomThought" render={() => <RandomThought user={user} />} />

        </Switch>
    );
};

export default Routing;
