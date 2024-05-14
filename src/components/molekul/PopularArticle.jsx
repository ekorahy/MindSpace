import { Link } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { IoIosArrowDropright } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

export const PopularArticle = ({ articles }) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='my-10 xl:my-20'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold text-lg dark:text-white xl:text-2xl'>
          {language === 'en'
            ? 'Most Popular Article'
            : 'Artikel Paling Populer'}
        </h2>
        <Link
          className='flex items-center gap-1 font-light text-violet-400 hover:text-violet-500 hover:border-b hover:border-violet-500'
          to='/articles'
        >
          {language === 'en' ? 'View more' : 'Lihat selengkapnya'}
          <IoIosArrowDropright className='hidden sm:block' />
        </Link>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};

PopularArticle.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
