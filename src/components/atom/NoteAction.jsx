import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';

export const NoteAction = ({
  id,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  return (
    <div className='absolute bottom-4 right-4 flex gap-2'>
      {archived ? (
        <button
          className='bg-yellow-400 text-white p-3 rounded-md hover:bg-yellow-600'
          onClick={() => onUnarchive(id)}
        >
          <MdUnarchive />
        </button>
      ) : (
        <button
          className='bg-slate-400 text-white p-3 rounded-md hover:bg-slate-600'
          onClick={() => onArchive(id)}
        >
          <MdArchive />
        </button>
      )}
      <button
        className='bg-rose-400 text-white p-3 rounded-md hover:bg-rose-600'
        onClick={() => onDelete(id)}
      >
        <MdDelete />
      </button>
    </div>
  );
};

NoteAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired
}