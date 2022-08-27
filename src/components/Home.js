import React from "react";
import Shelf from "./Shelf";
import { PropTypes } from "prop-types";

import { Helmet } from "react-helmet-async";

import ToSearchBtn from "./ToSearchBtn";





const Home = ({ booksData, handleUpdateShelf }) => {
  return (
    <>
      <Helmet>
       
        <link rel="canonical" href="/" />
      
      </Helmet>
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
      
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Currently Reading"
              shelf="currentlyReading"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Want To Read"
              shelf="wantToRead"
            />
            <Shelf
              handleUpdateShelf={handleUpdateShelf}
              booksData={booksData}
              titleName="Read"
              shelf="read"
            />
          </div>
        </div>
        <ToSearchBtn />
      </div>
    </>
  );
};
Home.propTypes = {
  booksData: PropTypes.array.isRequired,
  handleUpdateShelf: PropTypes.func.isRequired,
};

export default Home;
