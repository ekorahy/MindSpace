import { useContext, useEffect, useState } from 'react';
import { getArticles } from '../data/local/articles';
import { ArticleList } from '../components/molekul/ArticleList';
import { LanguageContext } from '../contexts/LanguageContext';

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      <h2 className='font-bold text-xl dark:text-white'>
        {language === 'en' ? 'Latest Articles' : 'Artikel Terbaru'}
      </h2>
      <ArticleList articles={articles} />
    </div>
  );
};
