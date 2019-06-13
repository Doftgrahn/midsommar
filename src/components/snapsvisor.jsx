import React, {useEffect, useState} from "react";

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
        const visaData = {
            song: input,
            user: user.displayName,
            userId: user.uid,
            photo: user.photoURL
        };
        const dbRef = db.collection("visor").doc();
        dbRef.set(visaData).then(() => console.log("yoyo"));
        setInput('');
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
        <main>
            <h1>Lägg till en visa!</h1>
            <input
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}
            />
            <button onClick={addVisa}>Lägg till visa!</button>
            <div className="visa-wrapper">
                {visa.map(v => (
                    <div key={v.id}>
                        <span>{v.song}</span>
                        <button onClick={() => deleteVisa(v)}>
                            Ta bort mig!
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Snapsvisor;
