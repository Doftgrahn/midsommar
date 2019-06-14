import React from "react";

const Hamburger = ({toggle, toggleState}) => {
    return (
        <div
            className={
                "b-header__hamburgerContainer " + (toggle ? "active" : "")
            }
            onClick={() => toggleState()}
        >
            <span />
            <span />
            <span />
        </div>
    );
};

export default Hamburger;
