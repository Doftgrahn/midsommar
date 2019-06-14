import React from "react";

const LandingPage = ({user}) => {
    return (
        <main className="landing">
    <div className="landing-wrapper">
    <h1>Hej {user.displayName}</h1>

            <div className="userinfo">
                <p>här kommer en schleten bild på dig</p>
                <div className="pic_wrapper">
                <img src={user.photoURL} alt="userPhoto" />
                </div>
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
            </div>
        </main>
    );
};

export default LandingPage;
