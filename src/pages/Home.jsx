import { useEffect, useState } from 'react';
import { NoteList } from '../components/molekul/NoteList';
import { SearchBar } from '../components/atom/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  unarchiveNote,
} from '../data/remote/remote';

export const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setActiveNotes(data);
  }

  function onArchiveHandler(id) {
    archiveNote(id);

    navigate('/archived');
  }

  function onUnarchiveHandler(id) {
    unarchiveNote(id);

    navigate('/');
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <section className='mb-4'>
        <h2 className='font-bold text-lg'>Active Notes</h2>
        {filteredNotes.length === 0 ? (
          <p className='text-center text-rose-400'>Empty Data</p>
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
