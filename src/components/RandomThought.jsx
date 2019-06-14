import React, {useState, useEffect} from "react";

import {db} from "../shared/firebaseConfig";

const RandomThought = ({user}) => {
    const [blogg, setBlogg] = useState("");
    const [post, setPost] = useState([]);

    useEffect(() => {
        const dbRef = db.collection("blogg");
        let unsubscribe = dbRef.onSnapshot(snapshot => {
            const bloggList = [];
            snapshot.forEach(doc => {
                bloggList.push({...doc.data(), id: doc.id});
            });
            setPost(bloggList);
        });
        return unsubscribe;
    }, []);

    const sendPost = () => {
        if (blogg) {
            const bloggData = {
                post: blogg,
                user: user.displayName,
                photo: user.photoURL,
                userId: user.uid,
                timestamp: new Date()
            };
            const dbRef = db.collection("blogg").doc();
            dbRef.set(bloggData).then(() => console.log("sup"));
        }
    };

    const taBortmig = post => {
        if (post.userId === user.uid) {
            const dbRef = db.collection("blogg");
            dbRef
                .doc(post.id)
                .delete()
                .then(() => console.log("deleted"));
        }
    };

    return (
        <main className="thought">
            <div className="thought-wrapper">
                <h1>Här kan du ställa frågor och sånt!</h1>
                <textarea
                    placeholder="skriv något!"
                    value={blogg}
                    onChange={event => setBlogg(event.target.value)}
                />
                <button onClick={sendPost}>Skicka!</button>

                <div className="post-wrapper">
                    {post.map(p => (
                        <div key={p.id} className="p-container">
                            <h4>{p.user}</h4>
                            <p key={p.id}>{p.post}</p>
                            {p.userId === user.uid ?  <button onClick={() => taBortmig(p)}>
                                ta bort mig!
                            </button> : null}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default RandomThought;
