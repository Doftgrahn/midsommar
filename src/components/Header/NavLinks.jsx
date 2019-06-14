import React from "react";

import {NavLink} from "react-router-dom";

const NavLinks = ({toggle, toggleOff, user, logOut}) => {
    return (
        <div
            className={
                "b-header__container " +
                (toggle ? "b-header__container--active" : "")
            }
        >
            <div className="linkWrapper">
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/home"
                    activeClassName="active"
                >
                    Home
                </NavLink>
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/rsvp"
                    activeClassName="active"
                >
                    RSVP
                </NavLink>
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/mat"
                    activeClassName="active"
                >
                    Mat
                </NavLink>
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/lekar"
                    activeClassName="active"
                >
                    Lekar
                </NavLink>
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/snapsvisor"
                    activeClassName="active"
                >
                    Snapsvisor
                </NavLink>
                <NavLink
                    onClick={toggleOff}
                    className="navLinks"
                    to="/randomThought"
                    activeClassName="active"
                >
                    Info
                </NavLink>
                {!user ? <button onClick={logOut}>Logga ut!</button> : null}

            </div>
        </div>
    );
};

export default NavLinks;
