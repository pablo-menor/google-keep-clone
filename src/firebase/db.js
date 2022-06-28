import { db } from './firebase.js'

import { collection, addDoc } from "firebase/firestore";

export const saveNote = async (title, note) => {
    try {
        await addDoc(collection(db, "notes"), {
            title,
            note
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
