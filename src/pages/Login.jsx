import { login } from '../data/remote/remote';
import { LoginInput } from '../components/molekul/LoginInput';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Login = ({ loginSuccess }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
