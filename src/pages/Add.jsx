import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addNote } from '../utils/local-data'
import NoteInput from '../components/molekul/NoteInput'

export const Add = () => {
  const navigate = useNavigate()

  function onAddNoteHandler(note) {
    addNote(note)
    navigate('/')
  }

  return (
    <div>
      <h2>Add note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  )
}
