import React from "react";
import BackToHomeBtn from "./BackToHomeBtn";

import SearchShelf from "./SearchShelf";

import { PropTypes } from "prop-types";

import { Helmet } from "react-helmet-async";

const Search = ({
  handleSearchQuery,
  searchQuery,
  handleUpdateShelf,
  mergedBooks,
}) => {
  return (
    <>
      <Helmet>
        <title>SearchPage</title>
        <link rel="canonical" href="/search" />
       

      </Helmet>
      <div className="search-books">
        <div className="search-books-bar">
          <BackToHomeBtn />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search by title, author, or ISBN"
              onChange={handleSearchQuery}
            />
          </div>
        </div>
     
        <SearchShelf
          searchQuery={searchQuery}
          mergedBooks={mergedBooks}
          handleUpdateShelf={handleUpdateShelf}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  handleSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
};
export default Search;
