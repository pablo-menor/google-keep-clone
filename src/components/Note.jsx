import React from 'react'
import styles from '../styles/note.module.css'
export const Note = ({ title, content }) => {
    return (
        <div className={styles.note_container}>
            {title}
            {content}
        </div>
    )
}
