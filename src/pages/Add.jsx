import { useNavigate } from 'react-router-dom';
import { NoteInput } from '../components/molekul/NoteInput';
import { addNote } from '../data/remote/remote';
import { useState } from 'react';

export const Add = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onAddNoteHandler(title, body) {
    setLoading(true);
    const { error } = await addNote({ title, body });
    setLoading(false);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div>
      <h2 className='font-bold text-lg mb-4 dark:text-white'>Add note</h2>
      <NoteInput addNote={onAddNoteHandler} loading={loading} />
    </div>
  );
};
