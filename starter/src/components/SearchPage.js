import { Link } from "react-router-dom";
import { useState } from "react";
import * as BooksAPI from "../utils/BooksAPI";
import Book from "./Book";

const SearchPage = ({ books, updateBook }) => {
  const [query, setQuery] = useState("");
  const [foundBooks, setFoundBooks] = useState("");

  const updateQuery = (query) => {
    if (query.length > 0) {
      const trimmedQuery = query.replace(/^\s+/, "");
      setQuery(trimmedQuery);
      searchBooks(query);
    } else {
      setQuery("");
      setFoundBooks([]);
    }
  };

  const searchBooks = (query, maxResults) => {
    const findBooks = async (query, maxResults) => {
      const result = await BooksAPI.search(query, maxResults);
      if (result.error) {
        setFoundBooks([]);
      } else {
        setFoundBooks(result);
      }
    };
    findBooks(query, maxResults);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {foundBooks
            ? foundBooks.map((book) => {
                const bookOnShelf = books.find((b) => b.id === book.id);
                if (bookOnShelf) {
                  book.shelf = bookOnShelf.shelf;
                }
                return (
                  <Book book={book} key={book.id} updateBook={updateBook} />
                );
              })
            : console.log("No book found for query: " + query)}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
