import PropTypes from 'prop-types'

export const Welcome = ({ name }) => {
  return (
    <div className='mb-4'>
      <h2 className='font-bold'>
        Welcome back <span className='text-violet-400'>{name}</span>
      </h2>
      <p className="font-light">Have a great day🎉</p>
    </div>
  );
};


Welcome.propTypes = {
  name: PropTypes.string.isRequired
} 