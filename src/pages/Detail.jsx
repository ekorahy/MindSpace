import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import parse from 'html-react-parser';
import { MdArchive, MdUnarchive, MdDelete } from 'react-icons/md';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../data/remote/remote';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setLoading(false);
    });
  }, [id]);

  function onDeleteHandler(id) {
    deleteNote(id);

    navigate('/');
  }

  function onArchiveHandler(id) {
    archiveNote(id);

    navigate('/archived');
  }

  function onUnarchiveHandler(id) {
    unarchiveNote(id);

    navigate('/');
  }

  const { title, createdAt, body, archived } = note;

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='mt-16'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      <p className='font-light text-lg'>{showFormattedDate(createdAt)}</p>
      <p className='text-lg'>{parse(`${body}`)}</p>
      <div className='my-8 flex justify-end gap-2'>
        {archived ? (
          <button
            className='bg-yellow-400 text-white text-lg p-3 rounded-md hover:bg-yellow-600'
            onClick={() => onUnarchiveHandler(id)}
          >
            <MdUnarchive />
          </button>
        ) : (
          <button
            className='bg-slate-400 text-white text-lg p-3 rounded-md hover:bg-slate-600'
            onClick={() => onArchiveHandler(id)}
          >
            <MdArchive />
          </button>
        )}
        <button
          className='bg-rose-400 text-white text-lg p-3 rounded-md hover:bg-rose-600'
          onClick={() => onDeleteHandler(id)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
