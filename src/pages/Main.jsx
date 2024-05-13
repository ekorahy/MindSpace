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
import { Welcome } from '../components/molekul/Welcome';
import PropTypes from 'prop-types';

export const Main = ({ name }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setActiveNotes(data);
      setLoading(false);
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
      navigate('/archived');
    }
  }

  async function onUnarchiveHandler(id) {
    const { error } = await unarchiveNote(id);

    if (!error) {
      navigate('/');
    }
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Welcome name={name} />
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

Main.propTypes = {
  name: PropTypes.string.isRequired,
};
