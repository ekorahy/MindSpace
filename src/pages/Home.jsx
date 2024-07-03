import { useEffect, useState } from "react";
import { NoteList } from "../components/molecules/NoteList";
import { SearchBar } from "../components/atoms/SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { Welcome } from "../components/molecules/Welcome";
import PropTypes from "prop-types";
import { RiAddLargeFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncArchiveNote,
  asyncDeleteNote,
  asyncGetActiveNotes,
} from "../states/activeNotes/action";
import { asyncUnarchiveNote } from "../states/archivedNotes/action";
import { useNavigate } from "react-router-dom";
import EmptyData from "../components/atoms/EmptyData";

export const Home = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { activeNotes = [] } = useSelector((states) => states);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    dispatch(asyncGetActiveNotes());
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
            className="flex items-center gap-2 rounded-md bg-emerald-400 p-2 hover:bg-emerald-500 dark:text-zinc-950"
            to="/add"
          >
            <span>
              <RiAddLargeFill />
            </span>
            <span className="hidden sm:block">Add New Note</span>
          </Link>
        </div>
        {filteredNotes.length === 0 ? (
          <EmptyData />
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
