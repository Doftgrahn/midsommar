import React, {useEffect, useState} from "react";
import {db} from "../shared/firebaseConfig";

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
        const data = {
            lek: lekInput,
            user: user.displayName,
            photo: user.photoURL
        };
        const dbRef = db.collection("lekar").doc();
        dbRef.set(data).then(() => console.log("yo!"));
    };

    return (
        <main>
            <h1>Lekar</h1>
            <p>Förslag!</p>
            <input
                placeholder="lägg till lek..."
                type="text"
                value={lekInput}
                onChange={event => setLekInput(event.target.value)}
            />
            <button onClick={addLekar}>Lägg till lek</button>

            <div>
                <ul>
                    {lekar.map(lek => (
                        <li key={lek.id}>
                            <span>{lek.user}</span>
                            <span>{lek.lek}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Lekar;
