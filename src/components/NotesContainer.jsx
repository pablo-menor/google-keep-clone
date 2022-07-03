import React, { useState, useEffect } from 'react'
import { Note } from './Note'
import styles from '../styles/notesContainer.module.css'
import { getAllNotes } from '../firebase/db'

export const NotesContainer = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNotes = async () => {
            console.log('fetching');
            const notes = await getAllNotes()
            setNotes(notes);
        }
        fetchNotes()
    }, [])
    return (
        <section className={styles.notes_container}>
            {notes.map((note, i) => <Note key={i} title={note.title} content={note.note} />)}
        </section>
    )
}
