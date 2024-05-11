import { Link, Route, Routes } from 'react-router-dom';
import { Add } from './pages/Add';
import { useEffect, useState } from 'react';
import { getUserLogged, putAccessToken } from './data/remote/remote';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Archived } from './pages/Archived';
import { Detail } from './pages/Detail';

/**
 export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLogout = this.onLogout.bind(this);
    this.onLoginSucces = this.onLoginSucces.bind(this);
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken('');
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <main>
          <Routes>
            <Route
              path='/*'
              element={<Login loginSuccess={this.onLoginSucces} />}
            />
            <Route path='/register' element={<Register />} />
          </Routes>
        </main>
      );
    }

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
            <div className='flex items-center gap-4'>
              <button
                className='font-bold text-rose-400 hover:text-rose-500'
                onClick={() => this.onLogout()}
              >
                Log out
              </button>
              <Link className='font-bold hover:text-violet-400' to={'/add'}>
                Add
              </Link>
              <Link
                className='font-bold hover:text-violet-400'
                to={'/archived'}
              >
                Archived
              </Link>
            </div>
          </nav>
        </header>

        <main className='p-4'>
          <div className='max-w-6xl mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/add' element={<Add />} />
              <Route path='/archived' element={<Archived />} />
            </Routes>
          </div>
        </main>
      </>
    );
  }
}
 */

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

  function onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = getUserLogged();

    setAuthedUser(data);
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path='/*' element={<Login loginSuccess={onLoginSucces} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    );
  }

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
          <div className='flex items-center gap-4'>
            <button
              className='font-bold text-rose-400 hover:text-rose-500'
              onClick={() => onLogoutHandler()}
            >
              Log out
            </button>
            <Link className='font-bold hover:text-violet-400' to={'/add'}>
              Add
            </Link>
            <Link className='font-bold hover:text-violet-400' to={'/archived'}>
              Archived
            </Link>
          </div>
        </nav>
      </header>

      <main className='p-4'>
        <div className='max-w-6xl mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/add' element={<Add />} />
            <Route path='/archived' element={<Archived />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
