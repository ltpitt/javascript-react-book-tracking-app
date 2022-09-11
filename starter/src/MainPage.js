import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const MainPage = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const updateShowSearchPage = (state) => {
    setShowSearchPage(state);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <CurrentlyReading />
        <WantToRead />
        <Read />
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
