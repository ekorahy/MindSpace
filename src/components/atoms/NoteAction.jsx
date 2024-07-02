import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

export const NoteAction = ({
  id,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) => {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2">
      {archived ? (
        <button
          className="rounded-md bg-yellow-400 p-3 text-white hover:bg-yellow-600"
          onClick={() => onUnarchive(id)}
        >
          <MdUnarchive />
        </button>
      ) : (
        <button
          className="rounded-md bg-slate-400 p-3 text-white hover:bg-slate-600"
          onClick={() => onArchive(id)}
        >
          <MdArchive />
        </button>
      )}
      <button
        className="rounded-md bg-rose-400 p-3 text-white hover:bg-rose-600"
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
  onUnarchive: PropTypes.func.isRequired,
};
