import React from "react";

const LoggedOut = ({logIn}) => {
    return (
        <main className="logLoggedIn">
            <div className="video">
                <iframe
                    title="''"
                    src="https://player.vimeo.com/video/177527141?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                    width="640"
                    height="360"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                />
            </div>
            <button onClick={logIn}>Log In!!!!</button>
        </main>
    );
};

export default LoggedOut;
