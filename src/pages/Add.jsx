import { useNavigate } from 'react-router-dom'
import NoteInput from '../components/molekul/NoteInput'
import { addNote } from '../data/remote/remote'

export const Add = () => {
  const navigate = useNavigate()

  function onAddNoteHandler(note) {
    addNote(note)
    navigate('/')
  }

  return (
    <div>
      <h2 className='font-bold text-lg mb-4'>Add note</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  )
}
