import React, {useState} from "react";

//import {Link} from "react-router-dom";

import Hamburger from "./Hamburger";

import NavLinks from "./NavLinks";

const Header = ({logOut, user}) => {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    const toggleOff = () => {
        setToggle(false);
    };

    return (
        <>
            {!user ? null : (
                <header>
                    <h1>Midsommar 2019</h1>
                    <div className="nav-wrapper">
                        <NavLinks
                            toggle={toggle}
                            toggleOff={toggleOff}
                            logOut={logOut}
                        />
                    </div>
                    <Hamburger
                        toggleState={toggleState}
                        toggle={toggle}
                        user={user}
                        logOut={logOut}
                    />
                </header>
            )}
        </>
    );
};

export default Header;
