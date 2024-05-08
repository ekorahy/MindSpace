import PropTypes from 'prop-types';

export const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <input
      className='w-full border p-3 rounded-md mb-4'
      type='text'
      placeholder='Search by title'
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
};


SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}