import { serverTimestamp } from 'firebase/firestore'
import React, { useState, useEffect, useRef } from 'react'
import { updateNote as update, deleteNote } from '../firebase/db'
import { MdOutlineCancel, MdDelete } from 'react-icons/md'

import styles from '../styles/createNote.module.css'

const updateButtonStyles = {
  width: '100px',
  borderRadius: '6px',
  backgroundColor: 'rgb(244 206 2)',
  fontSize: ' 1.15rem'
}

export const EditNote = ({ initialTitle, initialContent, id, close, closeAndEdit, closeAndDelete }) => {

  const [title, setTitle] = useState(initialTitle)
  const [content, setContent] = useState(initialContent)

  const titleInput = useRef()
  const contentInput = useRef()
  const thisComponentContainer = useRef()

  // Close if click outside component
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!thisComponentContainer.current.contains(e.target)) {
        e.stopPropagation();
        closeWithoutEditing()
      }
    })
  }, [])

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }
  const changeContent = (e) => {
    setContent(e.target.value)
  }
  const updateNote = (e) => {
    e.preventDefault()
    const newNote = { title, note: content, timestamp: serverTimestamp() }
    update(id, newNote)
    closeAndEdit({ ...newNote, id })
  }
  const closeWithoutEditing = () => {
    close()
  }

  const deleteNoteById = () => {
    deleteNote(id)
    closeAndDelete(id)
  }
  return (
    <>
      <Mask></Mask>
      <div ref={thisComponentContainer} className={`${styles.form_container} ${styles.editing_note}`}>
        <form >
          <input type="text" placeholder='Title' value={title} ref={titleInput} onChange={changeTitle} />
          <textarea name="" id="" cols="30" rows="10" placeholder='Take a note...' value={content} ref={contentInput} onChange={changeContent}></textarea>
          <button style={updateButtonStyles} onClick={(e) => updateNote(e)}>Save</button>
          <MdOutlineCancel onClick={closeWithoutEditing} style={cancelIconStyles}></MdOutlineCancel>
        </form>
        <MdDelete style={deleteIconStyles} onClick={deleteNoteById}></MdDelete>
      </div>
    </>
  )
}

// Freeze background while editing note
const Mask = () => {

  return (
    <div style={stylesMask}></div>
  )
}

const stylesMask = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#ebebeb',
  position: 'fixed',
  top: '0',
  // backdropFilter: 'grayScale(1)',
  opacity: 0.6
}


// Cancel icon styles
const cancelIconStyles = {
  fontSize: '2.5rem',
  position: 'absolute',
  right: '-15px',
  top: '-15px',
  color: 'rgb(74 73 70)',
  cursor: 'pointer',
}

// Delete icon styles
const deleteIconStyles = {
  fontSize: '70px',
  position: 'fixed',
  right: 'calc(50vw - 35px)',
  top: '60vh',
  color: '#f33434',
  cursor: 'pointer',
}