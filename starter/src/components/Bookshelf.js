import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

const Bookshelf = ({ books, shelf, updateBook }) => {
  console.log(books);

  const compareStringsToLowerCaseAndNoSpaces = (aString, bString) => {
    return toLowerCaseAndNoSpaces(aString) === toLowerCaseAndNoSpaces(bString);
  };

  const toLowerCaseAndNoSpaces = (aString) => {
    return aString.replace(/\s/g, "").toLowerCase();
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>;
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0
            ? books
                .filter((book) =>
                  compareStringsToLowerCaseAndNoSpaces(book.shelf, shelf)
                )
                .map((book) => (
                  <Book
                    book={book}
                    shelf={shelf}
                    key={book.id}
                    updateBook={updateBook}
                  />
                ))
            : console.log("Empty bookshelf")}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
