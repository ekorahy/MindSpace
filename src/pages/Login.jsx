import { login } from '../data/remote/remote';
import { LoginInput } from '../components/molekul/LoginInput';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Login = ({ loginSuccess }) => {
  async function onLogin(email, password) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='h-max w-96 bg-slate-100 p-8 rounded-md'>
        <h2 className='font-bold text-xl mb-4'>Login Form</h2>
        <LoginInput login={onLogin} />
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
