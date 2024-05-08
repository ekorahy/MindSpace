import React from 'react';
import { NoteBody } from '../atom/NoteBody';
import { NoteAction } from '../atom/NoteAction';

export const NoteItem = ({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  return (
    <section className='relative border p-4 rounded-md'>
      <NoteBody id={id} title={title} createdAt={createdAt} body={body} />
      <NoteAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
      />
    </section>
  );
};
