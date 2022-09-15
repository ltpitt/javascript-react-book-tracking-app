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

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        {shelves.map((shelf, index) => (
          <Bookshelf key={index} shelf={shelf} books={books} />
        ))}
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
