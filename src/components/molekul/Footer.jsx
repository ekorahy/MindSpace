import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
      <div className='bg-violet-400'>
        <div className='max-w-screen-xl h-max p-4 mx-auto flex justify-between'>
          <div>
            <ul>
              <li>
                <Link className='font-light text-white hover:font-bold' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='font-light text-white hover:font-bold' to='/'>
                  About
                </Link>
              </li>
              <li>
                <Link className='font-light text-white hover:font-bold' to='/'>
                  Articles
                </Link>
              </li>
              <li>
                <Link className='font-light text-white hover:font-bold' to='/'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className='mx-auto w-14 border rounded'
              src='/public/logo.jpg'
              alt=''
            />
            <h2 className='font-bold text- text-white'>MindSpace</h2>
          </div>
        </div>
      </div>
      <div>
        <p className='font-light p-2 text-center'>&copy;2024 - MindSpace</p>
      </div>
    </footer>
  );
};
