import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({
  handleSearchChange,
  handleSearchClick,
  searchText,
}) => {
  return (
    <>
      <input
        name="search"
        data-testid="searchLocation"
        onChange={e => handleSearchChange(e.target.value)}
        placeholder="Search by city or country..."
        type="text"
        value={searchText}
      />
      <button onClick={handleSearchClick} disabled={false}>
        Search
      </button>
    </>
  );
};

Search.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
