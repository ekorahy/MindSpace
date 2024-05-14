import { Route, Routes, useNavigate } from 'react-router-dom';
import { Add } from './pages/Add';
import { useEffect, useMemo, useState } from 'react';
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
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

export const App = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'id' : 'en';
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const languageContextValue = useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  function onLogoutHandler() {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
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
        <ThemeContext.Provider value={themeContextValue}>
          <LanguageContext.Provider value={languageContextValue}>
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
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <ThemeContext.Provider value={themeContextValue}>
          <LanguageContext.Provider value={languageContextValue}>
            <header className='w-full fixed z-20 top-0 p-4 bg-slate-400/3 backdrop-blur-md sm:px-8 md:px-16'>
              <Navigation logout={onLogoutHandler} authedUser={authedUser} />
            </header>

            <main className='p-4 mt-20 sm:px-8 md:px-16 md:mt-32'>
              <div className='max-w-screen-xl mx-auto'>
                <Routes>
                  <Route path='/' element={<Main name={authedUser.name} />} />
                  <Route path='/detail/:id' element={<Detail />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/archived' element={<Archived />} />
                </Routes>
              </div>
            </main>

            <footer className='bg-violet-400'>
              <p className='font-light p-2 text-white dark:text-black text-center'>
                &copy;2024 - MindSpace
              </p>
            </footer>
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }
};
