import { NoteItem } from './NoteItem';
import PropTypes from 'prop-types';

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

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired
}
