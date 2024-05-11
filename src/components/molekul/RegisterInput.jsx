import { useInput } from '../../custom_hooks/useInput';
import PropTypes from 'prop-types';

export const RegisterInput = ({ register }) => {
  const [name, onNameChangeHandler] = useInput('');
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    register(name, email, password);
  }

  return (
    <form className='grid grid-cols-1' onSubmit={onSubmitHandler}>
      <input
        className='p-2 border rounded-md mb-2'
        type='text'
        placeholder='Name'
        value={name}
        onChange={onNameChangeHandler}
        required
      />
      <input
        className='p-2 border rounded-md mb-2'
        type='text'
        placeholder='Email'
        value={email}
        onChange={onEmailChangeHandler}
        required
      />
      <input
        className='p-2 border rounded-md mb-2'
        type='text'
        placeholder='Password'
        value={password}
        onChange={onPasswordChangeHandler}
        required
      />
      <button
        className='p-2 bg-violet-400 rounded-md hover:bg-violet-500 mb-4'
        type='submit'
      >
        Register
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
