import PropTypes from "prop-types";

export const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      className="mb-4 w-full rounded-md border bg-white p-3 outline-none dark:border-zinc-800 dark:bg-zinc-950"
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
