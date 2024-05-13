import { Link, useNavigate } from 'react-router-dom';
import { register } from '../data/remote/remote';
import { RegisterInput } from '../components/molekul/RegisterInput';
import { useState } from 'react';

export const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function onRegisterHandler(name, email, password, confirmPassword) {
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      alert('The password you entered in not same.');
    } else {
      const { error } = await register({ name, email, password });
      setLoading(false);
      if (!error) {
        navigate('/login');
      }
    }
  }

  return (
    <div className='flex items-center justify-center sm:my-20'>
      <div className='h-max w-96 bg-slate-50 p-8 rounded-md'>
        <h2 className='font-bold text-xl mb-4'>Register Form</h2>
        <RegisterInput register={onRegisterHandler} loading={loading} />
        <p className='text-center font-light'>
          Back to{' '}
          <Link
            className='font-bold text-violet-400 hover:text-violet-500'
            to='/login'
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
