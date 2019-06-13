import React from "react";

import {Link} from "react-router-dom";

const Header = ({logOut, user}) => {
    return (<>
        {!user ? null :
        <header>
            <Link className="navLinks" to="/home">Home</Link>
            <Link className="navLinks" to="/rsvp">RSVP</Link>
            <Link className="navLinks" to="/mat">Mat</Link>
            <Link className="navLinks" to="/lekar">Lekar</Link>
            <Link className="navLinks" to="/snapsvisor">Snapsvisor</Link>
            <Link className="navLinks" to="/randomThought">Info</Link>

            {user ? <button onClick={logOut}>Logga ut!</button> : null}
        </header>}</>
    );
};

export default Header;
