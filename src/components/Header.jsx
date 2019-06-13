import React from "react";

import {Link} from "react-router-dom";

const Header = ({logOut, user}) => {
    return (<>
        {!user ? null :
        <header>
            <Link className="navLinks" to="/home">Home</Link>
            <Link className="navLinks" to="/omw">Skriv om du vill komma!</Link>
            <Link className="navLinks" to="/food">Mat</Link>
            <Link className="navLinks" to="/lekar">Lekar</Link>
            <Link className="navLinks" to="/snapsvisor">Snapsvisor</Link>
            {user ? <button onClick={logOut}>Logga ut!</button> : null}
        </header>}</>
    );
};

export default Header;
