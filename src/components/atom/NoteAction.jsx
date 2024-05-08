import React from 'react';

export const NoteAction = ({
  id,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  return (
    <div className='absolute bottom-4 flex gap-2'>
      {archived ? (
        <button
          className='bg-yellow-400 text-white py-1 px-3 rounded-md hover:bg-yellow-600'
          onClick={() => onUnarchive(id)}
        >
          UnArchive
        </button>
      ) : (
        <button
          className='bg-slate-400 text-white py-1 px-3 rounded-md hover:bg-slate-600'
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      )}
      <button
        className='bg-rose-400 text-white py-1 px-3 rounded-md hover:bg-rose-600'
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
