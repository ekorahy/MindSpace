import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className='bg-violet-400'>
      <div className='p-4 sm:px-8 md:px-16'>
        <div className='max-w-screen-xl h-max mx-auto flex justify-between'>
          <div>
            <ul>
              <li className='sm:my-2'>
                <Link
                  className='font-light text-white dark:text-black hover:font-bold'
                  to='/'
                >
                  {language === 'en' ? 'Home' : 'Beranda'}
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link
                  className='font-light text-white dark:text-black hover:font-bold'
                  to='/about'
                >
                  {language === 'en' ? 'About' : 'Tentang'}
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link
                  className='font-light text-white dark:text-black hover:font-bold'
                  to='/articles'
                >
                  {language === 'en' ? 'Articles' : 'Artikel'}
                </Link>
              </li>
              <li className='sm:my-2'>
                <Link
                  className='font-light text-white dark:text-black hover:font-bold'
                  to='/#FAQ'
                >
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
            <h2 className='font-bold text- text-white dark:text-black'>
              MindSpace
            </h2>
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-black'>
        <p className='font-light p-2 text-center dark:text-white'>
          &copy;2024 - MindSpace
        </p>
      </div>
    </footer>
  );
};
