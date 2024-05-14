import { useContext, useEffect, useState } from 'react';
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from '../data/remote/remote';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/atom/SearchBar';
import { NoteList } from '../components/molekul/NoteList';
import { LanguageContext } from '../contexts/LanguageContext';

export const Archived = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchivedNotes(data);
      setLoading(false);
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

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <section className='mb-4'>
        <h2 className='font-bold text-lg dark:text-white'>
          {language === 'en' ? 'Archived Notes' : 'Catatan Diarsipkan'}
        </h2>
        {filteredNotes.length === 0 ? (
          <p className='text-center text-rose-400'>
            {language === 'en' ? 'Empty Data' : 'Data Kosong'}
          </p>
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
