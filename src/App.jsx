import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { CreateNote } from './components/CreateNote'
import { NotesContainer } from './components/NotesContainer'

function App() {

  const [newNote, setNewNote] = useState({})

  const addNewNote = (title, note) => {
    setNewNote({ title, note })
  }

  return (
    <div className="App">
      <Header />
      <CreateNote addNewNote={addNewNote} />
      <NotesContainer newNote={newNote} />
    </div>
  )
}

export default App
