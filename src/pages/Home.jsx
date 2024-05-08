import React, { Component } from 'react';
import {
  archiveNote,
  deleteNote,
  getAllNotes,
  unarchiveNote,
} from '../utils/local-data';
import { NoteList } from '../components/molekul/NoteList';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      }
    });
  }

  onArchive(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      }
    });
  }

  onUnarchive(id) {
    unarchiveNote(id);

    this.setState(() => {
      return {
        notes: getAllNotes(),
      }
    });
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => !note.archived);
    const archivedNotes = this.state.notes.filter((note) => note.archived);

    return (
      <div>
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
