import { Component } from 'react';
import { NoteList } from '../components/molekul/NoteList';
import { SearchBar } from '../components/atom/SearchBar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  unarchiveNote,
} from '../data/remote/remote';

export const HomeWrapper = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Home
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      navigate={navigate}
    />
  );
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: [],
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => {
      return { activeNotes: data };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        activeNotes: data,
      };
    });
  }

  async onArchiveHandler(id) {
    await archiveNote(id);

    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        activeNotes: data,
      };
    });

    this.props.navigate('/archived');
  }

  async onUnarchiveHandler(id) {
    unarchiveNote(id);

    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        activeNotes: data,
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const activeNotes = this.state.activeNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

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
              onArchive={this.onArchiveHandler}
              onUnarchive={this.onUnarchiveHandler}
            />
          )}
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
