import "./css/App.css";
import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import { getAll, update } from "./BooksAPI";



import HookQuery from "./components/HookQuery";

function App() {
 
  const [booksData, setBooksData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookQuery] = HookQuery(searchQuery);
 
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapOfIdBooks] = useState(new Map());
  
  const getAllBooksData = async () => {
    await getAll().then((res) => {
      setBooksData(res);
      setMapOfIdBooks(createMapOfBooks(res));
    });
  };
 
  const handleUpdateShelf = async (book, shelf) => {
    await update(book, shelf);
    getAllBooksData();
  };

  const handleSearchQuery = (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  
  useEffect(() => {
    const combiningBooksShelf = searchBookQuery.map((book) => {
      if (mapOfIdBooks.has(book.id)) {
        return mapOfIdBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combiningBooksShelf);
  }, [searchBookQuery]);

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };


  useEffect(() => {
    getAllBooksData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              mergedBooks={mergedBooks}
              searchQuery={searchQuery}
              handleSearchQuery={handleSearchQuery}
              handleUpdateShelf={handleUpdateShelf}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home booksData={booksData} handleUpdateShelf={handleUpdateShelf} />
          }
        />
        
     
      </Routes>
    </div>
  );
}

export default App;
