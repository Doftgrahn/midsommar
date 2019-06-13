import React, {useEffect, useState} from "react";

import {db} from "../shared/firebaseConfig";

const Food = ({user}) => {
    const [food, setFood] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const dbRef = db.collection("food");
        let unsubscribe = dbRef.onSnapshot(snapshot => {
            const foodList = [];
            snapshot.forEach(doc => {
                foodList.push({...doc.data(), id: doc.id});
            });
            setList(foodList);
        });
        return unsubscribe;
    }, []);

    const onClickFood = () => {
        const dishInfo = {
            dish: food,
            user: user.displayName,
            photo: user.photoURL,
            userId: user.uid
        };

        const dbRef = db.collection("food").doc();
        dbRef.set(dishInfo).then(() => console.log("success"));
    };

    const deleteDish = f => {
        if (f.userId === user.uid) {
            const dbRef = db.collection("food");
            dbRef
                .doc(f.id)
                .delete()
                .then(() => console.log("deleted"));
        }
    };

    return (
        <main>
            <h1>Skriv vad du vill laga här</h1>
            <input
                type="text"
                value={food}
                onChange={event => setFood(event.target.value)}
            />

            <button onClick={onClickFood}>Lägg till maträtt!</button>
            {list.map(e => (
                <div key={e.id}>
                    <img src={e.photo} alt={e.user} />
                    <span>{e.user}</span>
                    <span>{e.dish}</span>
                    <button onClick={() => deleteDish(e)}>Delete</button>
                </div>
            ))}
        </main>
    );
};

export default Food;
