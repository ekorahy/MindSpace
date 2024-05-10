import { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import parse from 'html-react-parser';
import { MdArchive, MdUnarchive, MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types';
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../data/remote/remote';

export const DetailWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Detail id={id} navigate={navigate} />
  )
}

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: [],
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
      };
    });
  }

  async onDeleteHandler(id) {
    await deleteNote(id);

    this.props.navigate('/');
  }

  async onArchiveHandler(id) {
    await archiveNote(id);

    this.props.navigate('/archived');
  }

  async onUnarchiveHandler(id) {
    await unarchiveNote(id);

    this.props.navigate('/');
  }

  render() {
    const id = this.state.note.id;

    return (
      <div className='mt-16'>
        <h3 className='font-bold text-3xl'>{this.state.note.title}</h3>
        <p className='font-light text-lg'>
          {showFormattedDate(this.state.note.createdAt)}
        </p>
        <p className='text-lg'>{parse(`${this.state.note.body}`)}</p>
        <div className='my-8 flex justify-end gap-2'>
          {this.state.note.archived ? (
            <button
              className='bg-yellow-400 text-white text-lg p-3 rounded-md hover:bg-yellow-600'
              onClick={() => this.onUnarchiveHandler(id)}
            >
              <MdUnarchive />
            </button>
          ) : (
            <button
              className='bg-slate-400 text-white text-lg p-3 rounded-md hover:bg-slate-600'
              onClick={() => this.onArchiveHandler(id)}
            >
              <MdArchive />
            </button>
          )}
          <button
            className='bg-rose-400 text-white text-lg p-3 rounded-md hover:bg-rose-600'
            onClick={() => this.onDeleteHandler(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
