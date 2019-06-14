import React from "react";

//import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';


const Header = ({logOut, user, match}) => {

    return (<>
        {!user ? null :
        <header>
            <NavLink className="navLinks" to="/home" activeClassName="active">Home</NavLink>
            <NavLink className="navLinks" to="/rsvp" activeClassName="active">RSVP</NavLink>
            <NavLink className="navLinks" to="/mat" activeClassName="active">Mat</NavLink>
            <NavLink className="navLinks" to="/lekar" activeClassName="active">Lekar</NavLink>
            <NavLink className="navLinks" to="/snapsvisor" activeClassName="active">Snapsvisor</NavLink>
            <NavLink className="navLinks" to="/randomThought" activeClassName="active">Info</NavLink>

            {user ? <button onClick={logOut}>Logga ut!</button> : null}
        </header>}</>
    );
};

export default Header;
