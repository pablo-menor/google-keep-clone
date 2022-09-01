import React, { useState, useRef } from 'react'
import { updateNote as update } from '../firebase/db'

import styles from '../styles/createNote.module.css'


export const EditNote = ({ initialTitle, initialContent, id, close }) => {

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
    await update(id, {title, note: content})
    close()
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
