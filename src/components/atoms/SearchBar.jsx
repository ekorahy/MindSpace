import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export const SearchBar = ({ keyword, keywordChange }) => {
  const { language } = useContext(LanguageContext);
  return (
    <input
      className="mb-4 w-full rounded-md border p-3 dark:bg-black dark:text-white"
      type="text"
      placeholder={
        language === "en" ? "Search by title" : "Cari berdasarkan judul"
      }
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
