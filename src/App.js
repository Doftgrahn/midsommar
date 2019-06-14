import React, {useState, useEffect} from "react";
import "./styles/App.scss";
import {BrowserRouter as Router} from "react-router-dom";

import {provider, auth} from "./shared/firebaseConfig";

import Header from "./components/Header/Header";
import LoggedOut from "./components/LoggedOut";

import Routing from "./shared/routing";

const App = () => {
    const [user, setUser] = useState(
        null || JSON.parse(localStorage.getItem("user"))
    );
    console.log(user);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user
                ? localStorage.setItem("user", JSON.stringify(user))
                : localStorage.removeItem("user");
        });
    });

    const logIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            setUser(user);
        });
    };

    const logOut = () => {
        auth.signOut().then(() => {
            setUser(null);
        });
    };

    return (
        <div className="App">
            <Router>
                <Header  user={user} logOut={logOut} />
                {!user ? (
                    <LoggedOut logIn={logIn} />
                ) : (
                    <Routing user={user} logOut={logOut} />
                )}
            </Router>
        </div>
    );
};

export default App;
