import React from "react";

const LandingPage = ({user}) => {
    return (
        <main className="landing">
            <div className="userinfo">
                <h1>Hej {user.displayName}</h1>
                <p>här kommer en schleten bild på dig</p>
                <img src={user.photoURL} alt="userPhoto" />
            </div>
            <div className="randomInfo">
                <p>
                    På den här sidan kan du lägga till vilken typ av mat du vill
                    laga till midsommar 2019! du kan även säga om du vill komma
                    eller inte!
                </p>
                <p>Den här sidan är totalt onödig!</p>
                <p>
                    Navigera i menyn ovan för att komma till mat respektive
                    annat!
                </p>
            </div>
        </main>
    );
};

export default LandingPage;
