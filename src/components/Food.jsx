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
        if (food) {
            const dishInfo = {
                dish: food,
                user: user.displayName,
                photo: user.photoURL,
                userId: user.uid
            };

            const dbRef = db.collection("food").doc();
            dbRef.set(dishInfo).then(() => console.log("success"));
        }
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
        <main className="food">
            <div className="CollectedDishes">
                <h3>Rätterna hittils tillagda!</h3>
                <ul>
                    {list.map((e, i) => (
                        <li key={i}>{e.dish}</li>
                    ))}
                </ul>
            </div>

            <div className="inputContainer">
                <h3>Skriv vad du vill laga här!</h3>
                <input
                    placeholder="rutten fisk..."
                    type="text"
                    value={food}
                    onChange={event => setFood(event.target.value)}
                />
                <button disabled={food ? false : true} onClick={onClickFood}>
                    Lägg till maträtt!
                </button>
            </div>

            {list.map(e => (
                <div className="guestList" key={e.id}>
                    <div className="userinfo">
                        <div className="userPhoto">
                            <img src={e.photo} alt={e.user} />
                        </div>
                        <h3>{e.user}</h3>
                    </div>
                    <div className="dish">
                        <span>{e.dish}</span>
                    </div>

                    <div className="deleteBtnContainer">
                        {e.userId === user.uid ? (
                            <button onClick={() => deleteDish(e)}>
                                Delete
                            </button>
                        ) : null}
                    </div>
                </div>
            ))}
        </main>
    );
};

export default Food;
