import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const MainPage = ({ books }) => {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const updateShowSearchPage = (state) => {
    setShowSearchPage(state);
  };

  const shelves = ["Currently reading", "Want to read", "Read"];

  const currentlyReadingBooks = books.filter(
    (book) =>
      book.shelf.toLowerCase() === shelves[0].replace(/\s/g, "").toLowerCase()
  );

  const wantToReadBooks = books.filter(
    (book) =>
      book.shelf.toLowerCase() === shelves[1].replace(/\s/g, "").toLowerCase()
  );

  const readBooks = books.filter(
    (book) =>
      book.shelf.toLowerCase() === shelves[2].replace(/\s/g, "").toLowerCase()
  );

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <Bookshelf shelf={shelves[0]} books={currentlyReadingBooks} />
        {shelves.forEach((s) => (
          <Bookshelf shelf={s} books={currentlyReadingBooks} />
        ))}
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
