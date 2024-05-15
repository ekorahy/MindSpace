import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const ArticleItem = ({
  id,
  image,
  title,
  author,
  readingTime,
  createdAt,
  body,
}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="my-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
      <img className="mb-2 w-full rounded bg-red-100" src={image} alt="" />
      <div className="">
        <Link
          className="font-semibold hover:text-violet-400 dark:text-white xl:text-4xl"
          to={`/article/detail/${id}`}
        >
          {title}
        </Link>
        <h4 className="mb-1 font-light dark:text-white xl:mt-2 xl:text-lg">
          {language === "en" ? "Author" : "Penulis"}: {author}
        </h4>
        <div className="mb-2 flex items-center gap-4 xl:text-xl">
          <p className="flex items-center gap-1 dark:text-white">
            <IoIosTimer className="inline text-2xl text-violet-400" />{" "}
            {readingTime}
          </p>
          <p className="flex items-center gap-1 dark:text-white">
            <SlCalender className="inline text-lg text-violet-400" />{" "}
            {createdAt}
          </p>
        </div>
        <div className="mb-2 line-clamp-3 dark:text-white xl:text-xl">
          {parse(`${body}`)}
        </div>
        <Link
          className="text-violet-400 hover:text-violet-500 xl:text-xl"
          to={`/article/detail/${id}`}
        >
          {language === "en" ? "Read more" : "Baca selengkapnya"}...
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
