import { Component } from 'react';
import {
  archiveNote,
  deleteNote,
  getAllNotes,
  unarchiveNote,
} from '../utils/local-data';
import { NoteList } from '../components/molekul/NoteList';
import { SearchBar } from '../components/atom/SearchBar';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export const HomeWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <Home defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onArchive(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onUnarchive(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword)
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });
    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);

    return (
      <div>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <section className='mb-4'>
          <h2 className='font-bold text-lg'>Active Notes</h2>
          {activeNotes.length === 0 ? (
            <p className='text-center text-rose-400'>Empty Data</p>
          ) : (
            <NoteList
              notes={activeNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchive}
              onUnarchive={this.onUnarchive}
            />
          )}
        </section>
        <section className='mb-4'>
          <h2 className='font-bold text-lg'>Archived Notes</h2>
          {archivedNotes.length === 0 ? (
            <p className='text-center text-rose-400'>Empty data</p>
          ) : (
            <NoteList
              notes={archivedNotes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchive}
              onUnarchive={this.onUnarchive}
            />
          )}
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
