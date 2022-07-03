import React, { useState } from 'react'
import { saveNote } from '../firebase/db'

import { FaPlus } from 'react-icons/fa'
import styles from '../styles/createNote.module.css'

export const CreateNote = () => {
    const [title, setTitle] = useState('')

    const changeTitle = e => {
        setTitle(e.target.value)
    }
    const [content, setContent] = useState('')

    const changeContent = e => {
        setContent(e.target.value)
    }

    const uploadNote = (e) => {
        e.preventDefault();
        if (content.length > 0 || title.length > 0) {
            saveNote(title, content)
            setContent('')
            setTitle('')
        }
    }
    return (
        <div className={styles.form_container}>
            <form >
                <input type="text" placeholder='Title' value={title} onChange={changeTitle} />
                <textarea name="" id="" cols="30" rows="10" placeholder='Take a note...' value={content} onChange={changeContent} ></textarea>
                <button onClick={uploadNote}><FaPlus color='#ffffff' fontSize='1rem' /></button>
            </form>
        </div>
    )
}
