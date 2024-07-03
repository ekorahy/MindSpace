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
          className="rounded-md bg-yellow-400 p-3 text-white hover:bg-yellow-500"
          onClick={() => onUnarchive(id)}
        >
          <MdUnarchive className="dark:text-zinc-950" />
        </button>
      ) : (
        <button
          className="rounded-md bg-slate-400 p-3 text-white hover:bg-slate-500"
          onClick={() => onArchive(id)}
        >
          <MdArchive className="dark:text-zinc-950" />
        </button>
      )}
      <button
        className="rounded-md bg-red-400 p-3 text-white hover:bg-red-500"
        onClick={() => onDelete(id)}
      >
        <MdDelete className="dark:text-zinc-950" />
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
