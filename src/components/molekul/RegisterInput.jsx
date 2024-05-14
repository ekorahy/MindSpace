import { useContext } from 'react';
import { useInput } from '../../custom_hooks/useInput';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';

export const RegisterInput = ({ register, loading }) => {
  const [name, onNameChangeHandler] = useInput('');
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput('');
  const { language } = useContext(LanguageContext);

  function onSubmitHandler(event) {
    event.preventDefault();

    register(name, email, password, confirmPassword);
  }

  return (
    <form className='grid grid-cols-1' onSubmit={onSubmitHandler}>
      <input
        className='p-2 border rounded-md mb-2'
        type='text'
        placeholder={language === 'en' ? 'Name' : 'Nama'}
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
        placeholder={language === 'en' ? 'Password' : 'Kata Sandi'}
        value={password}
        onChange={onPasswordChangeHandler}
        required
      />
      <input
        className='p-2 border rounded-md mb-2'
        type='text'
        placeholder={
          language === 'en' ? 'Confirm Password' : 'Konfirmasi Kata Sandi'
        }
        value={confirmPassword}
        onChange={onConfirmPasswordChangeHandler}
        required
      />
      <button
        className='p-2 text-white bg-violet-400 rounded-md hover:bg-violet-500 mb-4'
        type='submit'
      >
        {`${
          loading
            ? language === 'en'
              ? 'Loading...'
              : 'Memuat...'
            : language === 'en'
            ? 'Register'
            : 'Daftar'
        }`}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
