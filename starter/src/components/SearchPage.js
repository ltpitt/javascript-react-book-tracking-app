import { Link } from "react-router-dom";
import { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query);
    console.log(query);
  };

  const clearQuery = () => {
    updateQuery("");
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
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default SearchPage;
