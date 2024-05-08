import React from 'react';
import { showFormattedDate } from '../../utils/index';

export const NoteBody = ({ title, createdAt, body }) => {
  return (
    <div className='mb-12'>
      <h3 className='font-semibold'>{title}</h3>
      <p className='font-light'>{showFormattedDate(createdAt)}</p>
      <p className='line-clamp-3'>{body}</p>
    </div>
  );
};
