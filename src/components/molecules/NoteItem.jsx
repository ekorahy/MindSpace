import { NoteBody } from "../atoms/NoteBody";
import { NoteAction } from "../atoms/NoteAction";
import PropTypes from "prop-types";

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
    <section className="relative rounded-md border p-4 dark:border-zinc-800">
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

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
