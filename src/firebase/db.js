import { db } from './firebase.js'
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp, updateDoc, doc, deleteDoc } from "firebase/firestore"

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
      const note = doc.data()
      notes.push({...note, id: doc.id})
    });
    return notes
}

export const updateNote = async (id, newNote) => {
 await updateDoc(doc(db, "notes", id), newNote)
}

export const deleteNote = async (id) => {
  await deleteDoc(doc(db, "notes", id))
}
