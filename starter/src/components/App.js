import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
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

  const updateBook = async (bookToUpdate, shelf) => {
    await BooksAPI.update(bookToUpdate, shelf);

    bookToUpdate.shelf = shelf;
    const updatedBooks = books
      .filter((book) => {
        return book.id !== bookToUpdate.id;
      })
      .concat(bookToUpdate);

    setBooks(updatedBooks);
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
        element={<SearchPage books={books} updateBook={updateBook} />}
      />
    </Routes>
  );
}

export default App;
