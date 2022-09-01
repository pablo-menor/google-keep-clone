import { serverTimestamp } from 'firebase/firestore'
import React, { useState, useRef } from 'react'
import { updateNote as update } from '../firebase/db'

import styles from '../styles/createNote.module.css'


export const EditNote = ({ initialTitle, initialContent, id, close, closeAndEdit }) => {

  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  const titleInput = useRef()
  const contentInput = useRef()

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeContent = (e) => {
    setContent(e.target.value)
  }
  const updateNote = async (e) => {
    e.preventDefault()
    const newNote = {title, note: content, timestamp: serverTimestamp()}
    await update(id, newNote) 
    closeAndEdit({...newNote, id})
  }

  return (
    <div className={`${styles.form_container} ${styles.editing_note}`}>
      <form >
        <input type="text" placeholder='Title' value={title} ref={titleInput} onChange={changeTitle} />
        <textarea name="" id="" cols="30" rows="10" placeholder='Take a note...' value={content} ref={contentInput} onChange={changeContent}></textarea>
        <button onClick={(e) => updateNote(e)}>Update</button>
      </form>
    </div>
  )
}
