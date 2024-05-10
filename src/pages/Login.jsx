import React from 'react';
import { login } from '../data/remote/remote';
import LoginInput from '../components/molekul/LoginInput';
import { Link } from 'react-router-dom';

export const Login = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <LoginInput login={onLogin} />
      <p>
        Dont have an account yet ? <Link to='/register'>Register</Link>{' '}
      </p>
    </div>
  );
};
