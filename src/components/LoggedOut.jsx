import React from 'react';


const LoggedOut = ({logIn}) => {
    return (<main className="logLoggedIn">
        <div className="video">
            <iframe
                src="https://player.vimeo.com/video/152962257?autoplay=1&loop=1"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="k"
            />
        </div>
        <button onClick={logIn}>Log In!!!!</button>
    </main>)
}


export default LoggedOut;
