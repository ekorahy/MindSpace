import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/atoms/SearchBar";
import { NoteList } from "../components/molecules/NoteList";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncDeleteNote,
  asyncGetArchivedNotes,
  asyncUnarchiveNote,
} from "../states/archivedNotes/action";
import { asyncArchiveNote } from "../states/activeNotes/action";

export const Archived = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { archivedNotes = [] } = useSelector((states) => states);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    dispatch(asyncGetArchivedNotes());
  }, [dispatch]);

  async function onDeleteHandler(noteId) {
    dispatch(asyncDeleteNote(noteId));
  }

  async function onArchiveHandler(noteId) {
    dispatch(asyncArchiveNote(noteId, navigate));
  }

  async function onUnarchiveHandler(noteId) {
    dispatch(asyncUnarchiveNote(noteId, navigate));
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <section className="mb-4">
        <h2 className="mb-2 text-lg font-bold">Archived Notes</h2>
        {filteredNotes.length === 0 ? (
          <p className="text-center text-red-400">Empty Data</p>
        ) : (
          <NoteList
            notes={filteredNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
            onUnarchive={onUnarchiveHandler}
          />
        )}
      </section>
    </div>
  );
};
