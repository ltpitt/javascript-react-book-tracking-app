import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const updateBook = async (book, shelf) => {
    console.log("You want to put Book Title: " + book.title);
    console.log("You want to put Book Id: " + book.id);
    console.log("On shelf: " + shelf);
    const updateResponse = await BooksAPI.update(book.id, shelf);
    const getAllResponse = await BooksAPI.getAll();
    console.log(updateResponse);
    setBooks(getAllResponse);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} updateBook={updateBook} />}
      />
      <Route
        path="/search"
        element={
          <SearchPage
          // onSearchBook={(book) => {
          //   searchBook(book);
          // }}
          />
        }
      />
    </Routes>
  );
}

export default App;
