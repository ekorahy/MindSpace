import { useEffect, useState } from "react";
import { Hero } from "../components/molecules/Hero";
import { PopularArticle } from "../components/molecules/PopularArticle";
import { getMostPopularArticle } from "../data/local/articles";
import { Services } from "../components/molecules/Services";
import { Testimonial } from "../components/molecules/Testimonial";
import { FAQ } from "../components/molecules/FAQ";

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
