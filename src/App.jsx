import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/Header'
import { CreateNote } from './components/CreateNote'
import { NotesContainer } from './components/NotesContainer'

function App() {
  
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <NotesContainer />
    </div>
  )
}

export default App
