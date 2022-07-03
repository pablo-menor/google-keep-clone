import { db } from './firebase.js'
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore"

export const saveNote = async (title, note) => {
    try {
        await addDoc(collection(db, "notes"), {
            title,
            note,
            timestamp: serverTimestamp()
        });
    } catch (e) {
        console.error("Error adding document: ", e)
    }
}

export const getAllNotes = async () => {
    const querySnapshot = await getDocs(query(collection(db, "notes"), orderBy('timestamp', 'desc')),)
    const notes = [];
    querySnapshot.forEach(doc => {
        notes.push(doc.data())
    });
    return notes
}
