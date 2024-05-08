import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export const App = () => {
  return (
    <>
      <header className='p-4'>
        <nav className='max-w-6xl mx-auto'>
          <Link to='/'>
            <img
              className='h-10 rounded-full'
              src='/public/logo.jpg'
              alt='logo image'
            />
          </Link>
        </nav>
      </header>

      <main className='p-4'>
        <div className='max-w-6xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
