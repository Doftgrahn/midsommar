import React, {useEffect, useState} from "react";

import Snaps from '../assets/snaps.jpg';

import {db} from "../shared/firebaseConfig";

const Snapsvisor = ({user}) => {
    const [input, setInput] = useState("");
    const [visa, setVisa] = useState([]);

    useEffect(() => {
        const dbRef = db.collection("visor");

        let unsubscribe = dbRef.onSnapshot(snapshot => {
            const visaList = [];
            snapshot.forEach(doc => {
                visaList.push({...doc.data(), id: doc.id});
            });
            setVisa(visaList);
        });
        return unsubscribe;
    }, []);

    const addVisa = () => {
        if (input) {
            const visaData = {
                song: input,
                user: user.displayName,
                userId: user.uid,
                photo: user.photoURL
            };
            const dbRef = db.collection("visor").doc();
            dbRef.set(visaData).then(() => console.log("yoyo"));
            setInput("");
        }
    };

    const deleteVisa = song => {
        if (song.userId === user.uid) {
            const dbRef = db.collection("visor");
            dbRef
                .doc(song.id)
                .delete()
                .then(() => console.log("success"));
        }
        setInput("");
    };

    return (
        <main className="visor">
            <div className="visor-wrapper">
                <div className="visor-wrapper-container">
                <div className="snapsbild"><img src={Snaps} alt=""/></div>
                    <h1>Lägg till en visa!</h1>
                    <input
                        placeholder="Något vackert!"
                        type="text"
                        value={input}
                        maxLength="20"
                        onChange={event => setInput(event.target.value)}
                    />
                    <span>
                        {input.length}
                        /20
                    </span>
                    <button onClick={addVisa} disabled={input ? false : true}>
                        Lägg till visa!
                    </button>
                </div>
                <div className="visa-wrapper">
                    {visa.map(v => (
                        <div className="visaList" key={v.id}>
                            <span>{v.song}</span>
                            {v.userId === user.uid ? (
                                <button onClick={() => deleteVisa(v)}>
                                    Ta bort mig!
                                </button>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Snapsvisor;
