import { ArticleItem } from "./ArticleItem";
import PropTypes from "prop-types";

export const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          image={article.image}
          title={article.title}
          author={article.author}
          readingTime={article.readingTime}
          createdAt={article.createdAt}
          body={article.body}
        />
      ))}
    </>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
