import React from 'react';
import { showFormattedDate } from '../../utils/index';
import { Link } from 'react-router-dom';

export const NoteBody = ({ id, title, createdAt, body }) => {
  return (
    <div className='mb-12'>
      <h3 className='font-semibold hover:text-violet-400'><Link to={`/detail/${id}`}>{title}</Link></h3>
      <p className='font-light'>{showFormattedDate(createdAt)}</p>
      <p className='line-clamp-3'>{body}</p>
    </div>
  );
};
