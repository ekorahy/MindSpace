import { useContext } from "react";
import { useInput } from "../../custom_hooks/useInput";
import PropTypes from "prop-types";
import { LanguageContext } from "../../contexts/LanguageContext";

export const NoteInput = ({ addNote, loading }) => {
  const [title, onTitleChangeHandler] = useInput("");
  const [body, onBodyChangeHandler] = useInput("", true);
  const { language } = useContext(LanguageContext);

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(title, body);
  }

  return (
    <form className="w-full dark:text-white" onSubmit={onSubmitHandler}>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="title">
          {language === "en" ? "Title" : "Judul"}
        </label>
        <input
          className="w-full rounded-md border p-3 dark:bg-black"
          id="title"
          type="text"
          value={title}
          onChange={onTitleChangeHandler}
        />
      </div>
      <div className="mb-4">
        <label className="mb-1" htmlFor="body">
          {language === "en" ? "Body" : "Isi"}
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
        className="w-full rounded-md bg-violet-400 p-3 text-white hover:bg-violet-600 dark:text-black"
        type="submit"
      >
        {`${
          loading
            ? language === "en"
              ? "Loading..."
              : "Memuat..."
            : language === "en"
              ? "Add"
              : "Tambah"
        }`}
      </button>
    </form>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
