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

  return (
    <Routes>
      <Route exact path="/" element={<MainPage books={books} />} />
      <Route
        path="/search"
        element={
          <SearchPage
          // onCreateContact={(contact) => {
          //   createContact(contact);
          // }}
          />
        }
      />
    </Routes>
  );
}

export default App;
