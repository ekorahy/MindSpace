import { useInput } from '../../custom_hooks/useInput';
import PropTypes from 'prop-types';

export const NoteInput = ({ addNote, loading }) => {
  const [title, onTitleChangeHandler] = useInput('');
  const [body, onBodyChangeHandler] = useInput('', true);

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote(title, body);
  }

  return (
    <form className='w-full' onSubmit={onSubmitHandler}>
      <div className='mb-4'>
        <label className='block mb-1' htmlFor='title'>
          Title
        </label>
        <input
          className='w-full border p-3 rounded-md'
          id='title'
          type='text'
          placeholder='Title'
          value={title}
          onChange={onTitleChangeHandler}
        />
      </div>
      <div className='mb-4'>
        <label className='mb-1' htmlFor='body'>
          Body
        </label>
        <div
          className='w-full h-40 border p-3 rounded-md'
          id='body'
          data-placeholder='Body'
          contentEditable
          onInput={onBodyChangeHandler}
        />
      </div>
      <button
        className='w-full p-3 bg-violet-400 rounded-md text-white hover:bg-violet-600'
        type='submit'
      >
        {`${loading ? 'Loading...' : 'Add'}`}
      </button>
    </form>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
