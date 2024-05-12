import PropTypes from 'prop-types';

export const ServiceItem = ({ title, icon }) => {
  return (
    <div className='bg-white rounded p-4'>
      <div className='animate-pulse w-max mx-auto text-6xl text-violet-400'>
        {icon}
      </div>
      <h3 className='font-semibold text-center text-violet-400 md:text-xl'>
        {title}
      </h3>
    </div>
  );
};

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
