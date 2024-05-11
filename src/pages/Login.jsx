import { login } from '../data/remote/remote';
import { LoginInput } from '../components/molekul/LoginInput';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Login = ({ loginSuccess }) => {
  const [loading, setLoading] = useState(false);

  async function onLogin(email, password) {
    setLoading(true);
    const { error, data } = await login({ email, password });
    setLoading(false);
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='h-max w-96 bg-slate-100 p-8 rounded-md'>
        <h2 className='font-bold text-xl mb-4'>Login Form</h2>
        <LoginInput login={onLogin} loading={loading} />
        <p className='text-center font-light'>
          Don&apos;t have an account yet ?{' '}
          <Link
            className='font-bold text-violet-400 hover:text-violet-500'
            to='/register'
          >
            Register
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
