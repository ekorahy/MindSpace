import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../data/local/articles";
import parse from "html-react-parser";
import { IoIosTimer } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { LanguageContext } from "../contexts/LanguageContext";

export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setArticle(getArticle(id));
  }, [id]);

  const { image, title, author, readingTime, createdAt, body } = article;

  return (
    <div>
      <h2 className="mb-4 text-lg font-bold dark:text-white xl:text-2xl">
        {title}
      </h2>
      <img className="mb-2 w-full rounded" src={image} alt="" />
      <p className="mb-1 text-sm font-light dark:text-white xl:text-lg">
        {language === "en" ? "Author" : "Penulis"}: {author}
      </p>
      <div className="mb-4 flex items-center gap-4 xl:text-xl">
        <p className="flex items-center gap-1 dark:text-white">
          <IoIosTimer className="inline text-2xl text-violet-400" />{" "}
          {readingTime}
        </p>
        <p className="flex items-center gap-1 dark:text-white">
          <SlCalender className="inline text-lg text-violet-400" /> {createdAt}
        </p>
      </div>
      <div className="dark:text-white xl:text-xl">{parse(`${body}`)}</div>
    </div>
  );
};
