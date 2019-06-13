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
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                />
            </div>
            <button onClick={logIn}>Logga in!</button>
        </main>
    );
};

export default LoggedOut;
