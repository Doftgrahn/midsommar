import React, {useEffect, useState} from "react";
import {db} from "../shared/firebaseConfig";

import Midsommar from "../assets/midsommar.jpg";

const Lekar = ({user}) => {
    const [lekInput, setLekInput] = useState("");
    const [lekar, setLekar] = useState([]);

    useEffect(() => {
        const dbRef = db.collection("lekar");
        let unsubscribe = dbRef.onSnapshot(snapshot => {
            const lekarLista = [];
            snapshot.forEach(doc => {
                lekarLista.push({...doc.data(), id: doc.id});
            });
            setLekar(lekarLista);
        });
        return unsubscribe;
    }, []);

    const addLekar = () => {
        if (lekInput) {
            const data = {
                lek: lekInput,
                user: user.displayName,
                userId: user.uid,
                photo: user.photoURL
            };
            const dbRef = db.collection("lekar").doc();
            dbRef.set(data).then(() => console.log("yo!"));
            setLekInput("");
        }
    };

    const taBortLekar = lek => {
        if (lek.userId === user.uid) {
            const dbRef = db.collection("lekar");
            dbRef
                .doc(lek.id)
                .delete()
                .then(() => console.log("deleted"));
        }
    };

    return (
        <main className="lekar">
            <div className="lekar-wrapper">
                <div className="input">
                    <div className="midsommar">
                        <img src={Midsommar} alt="" />
                    </div>
                    <h1>Lekar</h1>
                    <p>Förslag!</p>
                    <input
                        placeholder="lägg till lek..."
                        type="text"
                        value={lekInput}
                        maxLength="20"
                        onChange={event => setLekInput(event.target.value)}
                    />
                    <span>
                        {lekInput.length}
                        /20
                    </span>
                    <button
                        onClick={addLekar}
                        disabled={lekInput ? false : true}
                    >
                        Lägg till lek
                    </button>
                </div>

                <div className="lekar-wrapper">
                    <ul>
                        {lekar.map(lek => (
                            <li key={lek.id}>
                                <span>{lek.user}</span>
                                <span>{lek.lek}</span>
                                {lek.userId === user.uid ? (
                                    <button onClick={() => taBortLekar(lek)}>
                                        Ta bort!
                                    </button>
                                ) : (
                                    <p>{null}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default Lekar;
