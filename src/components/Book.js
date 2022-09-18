const Book = ({ book, updateBook }) => {
  if (book.imageLinks) {
  } else {
    book["imageLinks"] = {
      smallThumbnail: "https://via.placeholder.com/128x192.png",
    };
  }

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => updateBook(book, e.target.value)}
              defaultValue={book.shelf || "none"}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

export default Book;
