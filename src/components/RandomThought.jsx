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

    return (
        <main className="thought">
            <h1>Här kan du ställa frågor och sånt!</h1>
            <textarea
                value={blogg}
                onChange={event => setBlogg(event.target.value)}
            />
            <button onClick={sendPost}>Skicka!</button>

            <div>
                {post.map(p => (
                    <p key={p.id}>{p.post}</p>
                ))}
            </div>
        </main>
    );
};

export default RandomThought;
