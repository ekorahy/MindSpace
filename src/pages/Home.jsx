import { useEffect, useState } from "react";
import { Hero } from "../components/molekul/Hero";
import { PopularArticle } from "../components/molekul/PopularArticle";
import { getMostPopularArticle } from "../data/local/articles";
import { Services } from "../components/molekul/Services";
import { Testimonial } from "../components/molekul/Testimonial";
import { FAQ } from "../components/molekul/FAQ";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const popularArticles = getMostPopularArticle();
    setArticles(popularArticles);
  }, []);

  return (
    <>
      <Hero />
      <PopularArticle articles={articles} />
      <Services />
      <Testimonial />
      <FAQ />
    </>
  );
};
