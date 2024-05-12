import { Link } from 'react-router-dom';
import { RiMenu3Fill, RiLogoutBoxRLine } from 'react-icons/ri';
import { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import PropTypes from 'prop-types'

export const Navigation = ({ logout, authedUser }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  function onMenuHandler() {
    setOpenMenu(!openMenu);
  }

  function onProfileHandler() {
    setOpenProfile(!openProfile);
  }

  return (
    <nav className='relative max-w-screen-xl mx-auto'>
      <div className='max-w-screen-xl mx-auto flex justify-between'>
        <Link className='flex items-center gap-1' to='/'>
          <img
            className='h-10 rounded sm:h-8'
            src='/public/logo.jpg'
            alt='logo image'
          />{' '}
          <span className='font-bold text-xl hidden text-violet-400 sm:block'>
            MindSpace
          </span>
        </Link>
        <button className='text-xl px-3 sm:hidden' onClick={onMenuHandler}>
          <RiMenu3Fill />
        </button>
        {authedUser !== null ? (
          <>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-4'>
                <Link className='p-2 hover:text-violet-400' to={'/'}>
                  Home
                </Link>
                <Link className='p-2 hover:text-violet-400' to={'/archived'}>
                  Archived
                </Link>
                <Link className='p-2 hover:text-violet-400' to={'/add'}>
                  Add
                </Link>
              </div>
            </div>
            <button
              onClick={() => onProfileHandler()}
              className='hidden sm:flex items-center gap-1 font-bold'
            >
              <VscAccount className='inline text-2xl' /> {authedUser.name}
              {!openProfile ? (
                <MdOutlineArrowDropDown className='text-2xl' />
              ) : (
                <MdOutlineArrowDropUp className='text-2xl' />
              )}
            </button>
          </>
        ) : (
          <>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-4'>
                <Link className='p-2 hover:text-violet-400' to={'/'}>
                  Home
                </Link>
                <Link className='p-2 hover:text-violet-400' to={'/about'}>
                  About
                </Link>
                <Link className='p-2 hover:text-violet-400' to={'/articles'}>
                  Articles
                </Link>
                <Link className='p-2 hover:text-violet-400' to={'/faq'}>
                  FAQ
                </Link>
              </div>
            </div>
            <div className='hidden sm:flex items-center gap-2'>
              <Link
                className='py-1 px-4 rounded bg-violet-400 border border-violet-400 text-white hover:bg-violet-500 hover:border-violet-500'
                to={'/login'}
              >
                Login
              </Link>
              <Link
                className='py-1 px-4 rounded border border-violet-400 hover:bg-violet-500 hover:border-violet-500 hover:text-white'
                to={'/register'}
              >
                Register
              </Link>
            </div>
          </>
        )}
      </div>
      <div
        className={`${
          !openMenu && 'hidden'
        } fixed top-16 right-4 w-full flex justify-end`}
      >
        {authedUser !== null ? (
          <div className='h-max z-50 w-40 p-4 bg-slate-50 rounded-md'>
            <div className='w-full mx-auto text-center pb-4 border-b'>
              <div className='w-max text-4xl mx-auto'>
                <VscAccount />
              </div>
              <h2 className='font-bold'>{authedUser.name}</h2>
              <p className='font-light'>{authedUser.email}</p>
            </div>
            <ul className='mt-2'>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/'>Home</Link>
              </li>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/archived'>Archived</Link>
              </li>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/add'>Add</Link>
              </li>
              <li className=' p-2 mt-4 mb-1 text-center bg-rose-400 text-white hover:bg-rose-500'>
                <button onClick={() => logout()}>
                  <RiLogoutBoxRLine className='inline' /> Log out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className='h-max z-20 w-40 bg-slate-50 rounded-md'>
            <ul className='p-4'>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/'>Home</Link>
              </li>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/'>About</Link>
              </li>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/'>Articles</Link>
              </li>
              <li className='p-2 mb-1 border-b hover:bg-violet-400 hover:text-white'>
                <Link to='/'>FAQ</Link>
              </li>
              <li className='p-2 mt-4 mb-1 text-center bg-violet-400 text-white hover:bg-violet-500'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='p-2 text-center border border-violet-400 hover:bg-violet-500 hover:border-violet-500 hover:text-white'>
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className={`${!openProfile && 'hidden'} absolute right-0`}>
        {authedUser !== null && (
          <div className='h-max z-50 w-40 p-4 bg-slate-50 rounded-md'>
            <div className='w-full mx-auto text-center pb-4 border-b'>
              <div className='w-max text-4xl mx-auto'>
                <VscAccount />
              </div>
              <h2 className='font-bold'>{authedUser.name}</h2>
              <p className='font-light'>{authedUser.email}</p>
            </div>
            <button
              className='w-full p-2 mt-4 mb-1 text-center bg-rose-400 text-white hover:bg-rose-500'
              onClick={() => logout()}
            >
              <RiLogoutBoxRLine className='inline' /> Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};


Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  authedUser: PropTypes.object
}