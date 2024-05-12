import { Link } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { IoIosArrowDropright } from 'react-icons/io';
import PropTypes from 'prop-types';

export const PopularArticle = ({ articles }) => {
  return (
    <div className='my-10'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-lg xl:text-2xl'>Most popular Article</h2>
        <Link
          className='flex items-center gap-1 font-light text-violet-400 hover:text-violet-500 hover:border-b hover:border-violet-500'
          to='/articles'
        >
          View more <IoIosArrowDropright className='hidden sm:block' />
        </Link>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

PopularArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
