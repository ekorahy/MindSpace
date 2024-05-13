import PropTypes from 'prop-types';

export const TestiItem = ({ name, image, body }) => {
  return (
    <div className='text-center'>
      <img
        className='h-28 rounded-full mx-auto p-1 border-2 border-violet-400 sm:h-56'
        src={image}
        alt=''
      />
      <h3 className='font-semibold text-lg sm:text-xl sm:mt-2'>{name}</h3>
      <p className='sm:text-lg'>
        <q>{body}</q>
      </p>
    </div>
  );
};

TestiItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
