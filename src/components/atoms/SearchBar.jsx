import PropTypes from "prop-types";

export const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      className="mb-4 w-full rounded-md border p-3 outline-none"
      type="text"
      placeholder="Search by title"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
