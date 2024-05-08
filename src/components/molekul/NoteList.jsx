import React from 'react';
import { NoteBody } from '../atom/NoteBody';
import { NoteAction } from '../atom/NoteAction';
import { NoteItem } from './NoteItem';

export const NoteList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
          archived={note.archived}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          {...note}
        />
      ))}
    </div>
  );
};
