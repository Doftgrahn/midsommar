import React, {useState, useEffect} from "react";

import {db} from "../shared/firebaseConfig";

const Omw = ({user}) => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const databaseRef = db.collection("attend");

        let unsubscribe = databaseRef.onSnapshot(snapshot => {
            const guestList = [];
            snapshot.forEach(doc => {
                guestList.push({...doc.data(), id: doc.id});
            });
            setGuests(guestList);
        });
        return unsubscribe;
    }, []);

    const findUser = guests.find(e => e.userId === user.uid);

    const filterUser = guests.filter(e => e.userId === user.uid);

    const iWillAttend = () => {
        if (filterUser) {
            const userInfo = {
                name: user.displayName,
                photo: user.photoURL,
                userId: user.uid
            };
            const dbRef = db.collection("attend").doc();
            dbRef.set(userInfo).then(() => console.log("Hakar på! yäy!"));
        }
    };

    const renderGuests = guests.map(guest => (
        <li key={guest.id}>{guest.name}</li>
    ));

    console.log(findUser);
    return (
        <main className="omw">
            <h1>
                {findUser
                    ? "Du har bestämt dig för att fira midsommar på bästa sätt!"
                    : "Jag funderar över att fira midsommar i vallda!"}
            </h1>
            {!findUser ? (
                <button
                    disabled={!filterUser ? true : false}
                    onClick={iWillAttend}
                >
                    Klicka här för att säga att du kommer!
                </button>
            ) : null}
            <h2>Dessa underbara människor kommer!</h2>
            <h3>Ångrar du dig är du en tönt</h3>
            <ul>{renderGuests}</ul>
        </main>
    );
};

export default Omw;
