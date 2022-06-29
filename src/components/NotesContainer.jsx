import React, { useState } from 'react'
import { Note } from './Note'
import styles from '../styles/notesContainer.module.css'

export const NotesContainer = () => {
    return (
        <section className={styles.notes_container}>
            <Note title={'sas'} content={'fe'}/>
            <Note title={'safs'} content={'fefe'}/>
            <Note title={'safes'} content={'ffefee'}/>
            <Note title={'safes'} content={'ffefee'}/>
            <Note title={'safes'} content={'ffefee'}/>
            <Note title={'safes'} content={'ffeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffee'}/>
            <Note title={'safes'} content={'ffefee'}/>
            <Note title={'safes'} content={'ffefee'}/>
            <Note title={'safes'} content={'ffefee'}/>
        </section>
    )
}
