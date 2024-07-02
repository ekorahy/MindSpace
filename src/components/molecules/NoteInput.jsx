import { useInput } from "../../custom_hooks/useInput";
import PropTypes from "prop-types";

export const NoteInput = ({ addNote }) => {
  const [title, onTitleChangeHandler] = useInput("");
  const [body, onBodyChangeHandler] = useInput("", true);

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(title, body);
  }

  return (
    <form className="w-full" onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="title">
          Title
        </label>
        <input
          className="w-full rounded-md border p-3"
          id="title"
          type="text"
          value={title}
          onChange={onTitleChangeHandler}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1" htmlFor="body">
          Body
        </label>
        <div
          className="h-40 w-full rounded-md border p-3"
          id="body"
          data-placeholder="Body"
          contentEditable
          onInput={onBodyChangeHandler}
        />
      </div>
      <button
        className="w-full rounded-md bg-violet-400 p-3 text-white hover:bg-violet-600"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
