import { Link, Route, Routes } from 'react-router-dom';
import DetailWrapper from './pages/Detail';
import { Add } from './pages/Add';
import { HomeWrapper } from './pages/Home';

export const App = () => {
  return (
    <>
      <header className='p-4'>
        <nav className='max-w-6xl flex justify-between mx-auto'>
          <Link to='/'>
            <img
              className='h-10 rounded-full'
              src='/public/logo.jpg'
              alt='logo image'
            />
          </Link>
          <Link className='font-bold hover:text-violet-400' to={'/add'}>Add</Link>
        </nav>
      </header>

      <main className='p-4'>
        <div className='max-w-6xl mx-auto'>
          <Routes>
            <Route path='/' element={<HomeWrapper />} />
            <Route path='/detail/:id' element={<DetailWrapper />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
