import { useEffect, useState } from "react";
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../data/remote/remote";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/atoms/SearchBar";
import { NoteList } from "../components/molecules/NoteList";

export const Archived = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { error, data } = await getArchivedNotes();
    if (!error) {
      setArchivedNotes(data);
    }
  }

  async function onArchiveHandler(id) {
    const { error } = await archiveNote(id);

    if (!error) {
      navigate("/archived");
    }
  }

  async function onUnarchiveHandler(id) {
    const { error } = await unarchiveNote(id);

    if (!error) {
      navigate("/");
    }
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
