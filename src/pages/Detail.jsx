import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  archiveNote,
  deleteNote,
  getAllNotes,
  getNote,
  unarchiveNote,
} from '../utils/local-data';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';
import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";

export default function DetailWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <Detail id={id} navigate={navigate} />;
}

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });

    this.props.navigate('/');
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });

    this.props.navigate('/');
  }

  onUnarchive(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });

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
        <p className='text-lg'>{parser(this.state.note.body)}</p>
        <div className='my-8 flex justify-end gap-2'>
          {this.state.note.archived ? (
            <button
              className='bg-yellow-400 text-white text-lg p-3 rounded-md hover:bg-yellow-600'
              onClick={() => this.onUnarchive(id)}
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
