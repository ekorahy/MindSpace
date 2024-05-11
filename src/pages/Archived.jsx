import { useEffect, useState } from 'react';
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from '../data/remote/remote';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/atom/SearchBar';
import { NoteList } from '../components/molekul/NoteList';

export const Archived = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getArchivedNotes();
    setArchivedNotes(data);
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

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <section className='mb-4'>
        <h2 className='font-bold text-lg'>Archived Notes</h2>
        {filteredNotes.length === 0 ? (
          <p className='text-center text-rose-400'>Empty data</p>
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
