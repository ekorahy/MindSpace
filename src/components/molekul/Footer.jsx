import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-violet-400'>
      <div className='p-4 sm:px-8 md:px-16'>
        <div className='max-w-screen-xl h-max mx-auto flex justify-between'>
          <div>
            <ul>
              <li className='sm:my-2'>
                <Link className='font-light text-white dark:text-black hover:font-bold' to='/'>
                  Home
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link className='font-light text-white dark:text-black hover:font-bold' to='/'>
                  About
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link className='font-light text-white dark:text-black hover:font-bold' to='/'>
                  Articles
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link className='font-light text-white dark:text-black hover:font-bold' to='/'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className='mx-auto w-14 border rounded dark:border-black'
              src='/public/logo.jpg'
              alt=''
            />
            <h2 className='font-bold text- text-white dark:text-black'>MindSpace</h2>
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-black'>
        <p className='font-light p-2 text-center dark:text-white'>&copy;2024 - MindSpace</p>
      </div>
    </footer>
  );
};
