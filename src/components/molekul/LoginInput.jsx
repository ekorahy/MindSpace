import { useContext } from 'react';
import { useInput } from '../../custom_hooks/useInput';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';

export const LoginInput = ({ login, loading }) => {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const { language } = useContext(LanguageContext);

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
        placeholder={language === 'en' ? 'Password' : 'Kata Sandi'}
        value={password}
        onChange={onPasswordChangeHandler}
        required
      />
      <button
        className='p-2 text-white bg-violet-400 rounded-md mb-4 hover:bg-violet-500 bg-4'
        type='submit'
      >
        {`${
          loading
            ? language === 'en'
              ? 'Loading...'
              : 'Memuat...'
            : language === 'en'
            ? 'Log in'
            : 'Masuk'
        }`}
      </button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
