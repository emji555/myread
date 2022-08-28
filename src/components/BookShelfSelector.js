import React from "react";

import { object, PropTypes } from "prop-types";

const BookShelfSelector = ({ book, handleUpdateShelf }) => {
  

  const handleUpdateBookShelf = (e) => {

    const value = e.target.value;

    handleUpdateShelf(book, value);

    const shelvesList = [{id:"1", shelfName:"currentlyReading",shelfDisplayName:"Currently Reading"},
    {id:"2", shelfName:"wantToRead",shelfDisplayName:"Want to Read"},
    {id:"3", shelfName:"read",shelfDisplayName:"Read"},
    {id:"4", shelfName:"none",shelfDisplayName:"None"},
   
  ];
 

  };

  return (
    

    <select
      onChange={handleUpdateBookShelf}
      value={book.shelf ? book.shelf : "none"}
      
      
    >

      <option  disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>

    </select>
    
  );

};

BookShelfSelector.propTypes = {
  book: PropTypes.object.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};



export default BookShelfSelector;
