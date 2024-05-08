import { Component } from 'react';
import PropTypes from 'prop-types';

export default class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHanlder = this.onBodyChangeHanlder.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHanlder(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='w-full' onSubmit={this.onSubmitHandler}>
        <div className='mb-4'>
          <label className='block mb-1' htmlFor='title'>
            Title
          </label>
          <input
            className='w-full border p-3 rounded-md'
            id='title'
            type='text'
            placeholder='Title'
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1' htmlFor='body'>Body</label>
          <div
            className='w-full h-40 border p-3 rounded-md'
            id='body'
            data-placeholder='Body'
            contentEditable
            onInput={this.onBodyChangeHanlder}
          />
        </div>
        <button
          className='w-full p-3 bg-violet-400 rounded-md text-white hover:bg-violet-600'
          type='submit'
        >
          Add
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}
