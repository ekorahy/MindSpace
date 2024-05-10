import { Component } from 'react';
import {
  archiveNote,
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from '../data/remote/remote';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/atom/SearchBar';
import { NoteList } from '../components/molekul/NoteList';

export const ArchivedWrapper = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Archived
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      navigate={navigate}
    />
  );
};

export default class Archived extends Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: [],
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getArchivedNotes();

    this.setState(() => {
      return { archivedNotes: data };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getArchivedNotes();
    this.setState(() => {
      return {
        archivedNotes: data,
      };
    });
  }

  async onArchiveHandler(id) {
    await archiveNote(id);

    const { data } = await getArchivedNotes();
    this.setState(() => {
      return {
        archivedNotes: data,
      };
    });
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);

    const { data } = await getArchivedNotes();
    this.setState(() => {
      return {
        archivedNotes: data,
      };
    });

    this.props.navigate('/');
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
    const archivedNotes = this.state.archivedNotes.filter((note) => {
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
          <h2 className='font-bold text-lg'>Archived Notes</h2>
          {archivedNotes.length === 0 ? (
            <p className='text-center text-rose-400'>Empty data</p>
          ) : (
            <NoteList
              notes={archivedNotes}
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
