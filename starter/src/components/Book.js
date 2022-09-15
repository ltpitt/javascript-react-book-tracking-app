const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage:
                "url(" + props.book.imageLinks.smallThumbnail + ")",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value={props.shelf} disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">The Hobbit</div>
        <div className="book-authors">J.R.R. Tolkien</div>
      </div>
    </li>
  );
};

export default Book;
