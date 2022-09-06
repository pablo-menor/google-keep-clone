import React, { useState, useEffect } from 'react'
import { Note } from './Note'
import { EditNote } from './EditNote'
import styles from '../styles/notesContainer.module.css'
import { getAllNotes } from '../firebase/db'


export const NotesContainer = ({ newNote }) => {
  const [notes, setNotes] = useState([])
  const [showEdit, setShowEdit] = useState(false)
  const [selectedNote, setSelectedNote] = useState({})

  useEffect(() => {
    fetchNotes()
  }, [])

  useEffect(() => {
    setNotes([newNote, ...notes])
  }, [newNote])

  const editNote = (title, content, id) => {
    setSelectedNote({ title, content, id })
    setShowEdit(true)
  }

  const fetchNotes = async () => {
    const notes = await getAllNotes()
    setNotes(notes)
  }

  const updateNotes = (newNote) => {
    setShowEdit(false) 
    // Notes that have not been edited
    const notesUntouched = notes.filter(note => note.id !== newNote.id)
    setNotes([newNote, ...notesUntouched])
  }
  const deleteNote = (id) => {
    setShowEdit(false) 
    // Notes that have not been deleted
    const notesUntouched = notes.filter(note => note.id !== id)
    setNotes(notesUntouched)
  }



  return (
    <>
      <section className={styles.notes_container}>
        {notes.map((note, i) => <Note key={i} edit={editNote} title={note.title} content={note.note} id={note.id} />)}
      </section>
      {showEdit && <EditNote className={styles.editing_container} initialTitle={selectedNote.title} initialContent={selectedNote.content} id={selectedNote.id} closeAndEdit={updateNotes} closeAndDelete={deleteNote} close={()=> setShowEdit(false)}/>}
    </>
  )
}
