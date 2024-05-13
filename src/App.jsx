import { Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from './data/remote/remote';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Main } from './pages/Main';
import { Archived } from './pages/Archived';
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Navigation } from './components/molekul/Navigation';
import { Footer } from './components/molekul/Footer';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Article } from './pages/Article';

export const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  function onLogoutHandler() {
    setAuthedUser(null);
    putAccessToken('');
  }

  async function onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <header className='w-full fixed z-20 top-0 p-4 bg-slate-400/3 backdrop-blur-md sm:px-8 md:px-16'>
          <Navigation logout={onLogoutHandler} authedUser={authedUser} />
        </header>

        <main className='p-4 mt-20 sm:px-8 md:px-16 md:mt-32'>
          <div className='max-w-screen-xl mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/login'
                element={<Login loginSuccess={onLoginSucces} />}
              />
              <Route path='/register' element={<Register />} />
              <Route path='/about' element={<About />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/article/detail/:id' element={<Article />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <header className='w-full fixed z-20 top-0 p-4 bg-slate-400/3 backdrop-blur-md sm:px-6 md:px-8'>
          <Navigation logout={onLogoutHandler} authedUser={authedUser} />
        </header>

        <main className='p-4 my-20'>
          <div className='max-w-6xl mx-auto'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/add' element={<Add />} />
              <Route path='/archived' element={<Archived />} />
            </Routes>
          </div>
        </main>
      </>
    );
  }
};
