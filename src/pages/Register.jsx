import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../data/remote/remote';
import RegisterInput from '../components/molekul/RegisterInput';

export const Register = () => {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div>
      <h2>Register Form</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Back to <Link to='/'>Log in</Link>
      </p>
    </div>
  );
};
