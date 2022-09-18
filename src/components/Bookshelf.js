import Book from "./Book";

const Bookshelf = ({ books, shelf, updateBook }) => {
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
                  <Book book={book} key={book.id} updateBook={updateBook} />
                ))
            : []}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
