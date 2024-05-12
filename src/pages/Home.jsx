import { useEffect, useState } from 'react';
import { Hero } from '../components/molekul/Hero';
import { PopularArticle } from '../components/molekul/PopularArticle';
import { getMostPopularArticle } from '../data/local/local';
import { Services } from '../components/molekul/Services';

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const popularArticles = getMostPopularArticle()
    setArticles(popularArticles)
  }, []);

  return (
    <div>
      <Hero />
      <PopularArticle articles={articles} />
      <Services />
    </div>
  );
};
