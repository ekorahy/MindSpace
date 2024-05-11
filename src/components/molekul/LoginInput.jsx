import { useInput } from '../../custom_hooks/useInput';
import PropTypes from 'prop-types';

export const LoginInput = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  function onSubmitHandler(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <form className='grid grid-cols-1' onSubmit={onSubmitHandler}>
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
        className='p-2 bg-violet-400 rounded-md mb-4 hover:bg-violet-500 bg-4'
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
