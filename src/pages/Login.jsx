import { login } from '../data/remote/remote';
import { LoginInput } from '../components/molekul/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const Login = ({ loginSuccess }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);

  async function onLogin(email, password) {
    setLoading(true);
    const { error, data } = await login({ email, password });
    setLoading(false);
    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  }

  return (
    <div className='flex items-center justify-center sm:my-20'>
      <div className='h-max w-96 bg-slate-50 p-8 rounded-md'>
        <h2 className='font-bold text-xl mb-4'>
          {language === 'en' ? 'Login Form' : 'Formulir Masuk'}
        </h2>
        <LoginInput login={onLogin} loading={loading} />
        <p className='text-center font-light'>
          {language === 'en'
            ? `Don't have an account yet ? `
            : 'Belum memiliki akun ? '}
          <Link
            className='font-bold text-violet-400 hover:text-violet-500'
            to='/register'
          >
            {language === 'en' ? 'Register' : 'Daftar'}
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
