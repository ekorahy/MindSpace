import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='sm:flex flex-row-reverse items-center my-8'>
      <div className='basis-1/2'>
        <img src='/public/hero.png' alt='' />
      </div>
      <div className='mt-4 basis-1/2'>
        <p className='font-light dark:text-white md:text-lg'>Ideas are expensive!</p>
        <h2 className='font-bold text-3xl dark:text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl xl:mb-3'>
          Don&apos;t waste your ideas, capture them now using{' '}
          <span className='text-violet-400'>MindSpace</span>.
        </h2>
        <p className='mb-6 dark:text-white md:text-lg xl:mb-8'>
          a personal note app that will help you to capture your big ideas.
        </p>
        <Link
          className='bg-violet-400 px-4 py-2 text-white dark:text-black hover:bg-violet-500 md:text-lg xl:py-4 xl:px-6'
          to='/login'
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
