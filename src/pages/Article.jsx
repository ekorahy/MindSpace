import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../data/local/articles';
import parse from 'html-react-parser';
import { IoIosTimer } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';

export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    setArticle(getArticle(id));
  }, [id]);

  const { image, title, author, readingTime, createdAt, body } = article;

  return (
    <div>
      <h2 className='font-bold mb-4 dark:text-white sm:text-lg md:text-xl'>{title}</h2>
      <img className='w-full rounded mb-2' src={image} alt='' />
      <p className='font-light mb-2 dark:text-white'>Author: {author}</p>
      <div className='flex items-center gap-4 mb-4'>
        <p className='flex items-center gap-1 dark:text-white'>
          <IoIosTimer className='inline text-violet-400 text-2xl' />{' '}
          {readingTime}
        </p>
        <p className='flex items-center gap-1 dark:text-white'>
          <SlCalender className='inline text-violet-400 text-lg' /> {createdAt}
        </p>
      </div>
      <div className='dark:text-white'>{parse(`${body}`)}</div>
    </div>
  );
};
