import { useEffect, useState } from "react";
import { NoteList } from "../components/molecules/NoteList";
import { SearchBar } from "../components/atoms/SearchBar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  unarchiveNote,
} from "../data/remote/remote";
import { Welcome } from "../components/molecules/Welcome";
import PropTypes from "prop-types";
import { RiAddLargeFill } from "react-icons/ri";

export const Home = ({ name }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { error, data } = await getActiveNotes();
    if (!error) {
      setActiveNotes(data);
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

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div className="w-full">
      <Welcome name={name} />
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <section className="mb-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-2 text-lg font-bold">Active Notes</h2>
          <Link
            className="flex items-center gap-2 rounded-md bg-emerald-400 p-2 hover:bg-emerald-500"
            to="/add"
          >
            <span>
              <RiAddLargeFill />
            </span>
            <span className="hidden sm:block">Add New Note</span>
          </Link>
        </div>
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

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
