import { useEffect, useState } from 'react';
import { getArticles } from '../data/local/articles';
import { ArticleList } from '../components/molekul/ArticleList';

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  return (
    <div>
      <h2 className='font-bold text-xl'>Latest Articles</h2>
      <ArticleList articles={articles} />
    </div>
  );
};
