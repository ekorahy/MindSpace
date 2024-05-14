export const About = () => {
  return (
    <div>
      <h2 className='font-bold text-xl mb-4 dark:text-white'>MindSpace</h2>
      <img
        className='rounded w-full mx-auto mb-2 sm:w-60'
        src='/public/logo.jpg'
        alt=''
      />
      <p className="dark:text-white">
        is a free, easy-to-use, and secure app for managing personal data notes.
      </p>
    </div>
  );
};
