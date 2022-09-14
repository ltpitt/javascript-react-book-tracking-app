import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

const Bookshelf = ({ books, shelf }) => {
  console.log(shelf);
  console.log(books);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>;
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
          {books
            .filter((book) => book.shelf === shelf)
            .map((book) => (
              <Book book={book} shelf={shelf} key={book.id} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
