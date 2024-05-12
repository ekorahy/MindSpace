import { Link } from 'react-router-dom';
import { IoIosTimer } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import PropTypes from 'prop-types';

export const ArticleItem = ({
  id,
  image,
  title,
  author,
  readingTime,
  createdAt,
  body,
}) => {
  return (
    <div className='my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
      <img className='bg-red-100 w-full rounded mb-2' src={image} alt='' />
      <div className=''>
        <Link
          className='font-semibold text-lg hover:text-violet-400 xl:text-4xl'
          to={`/article/detail/${id}`}
        >
          {title}
        </Link>
        <h4 className='font-light mb-2 xl:text-lg xl:mt-2'>Author: {author}</h4>
        <div className='flex items-center gap-4 mb-2 xl:text-xl'>
          <p className='flex items-center gap-1'>
            <IoIosTimer className='inline text-violet-400 text-2xl' />{' '}
            {readingTime}
          </p>
          <p className='flex items-center gap-1'>
            <SlCalender className='inline text-violet-400 text-lg' />{' '}
            {createdAt}
          </p>
        </div>
        <p className='line-clamp-3 mb-2 xl:text-xl'>{body}</p>
        <Link
          className='text-violet-400 hover:text-violet-500 xl:text-xl'
          to={`/article/detail/${id}`}
        >
          Read more...
        </Link>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
