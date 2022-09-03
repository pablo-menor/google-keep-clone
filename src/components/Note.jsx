import React from 'react'
import styles from '../styles/note.module.css'
export const Note = ({ title, content, edit, id }) => {
  return (
    <div onClick={() => edit(title, content, id)} className={styles.note_container}>
      <h1>{title}</h1>
      <p>{content}</p>
      {!(title || content) && (
        <div className={styles.empty}>Empty note</div>
      )}
    </div>
  )
}
