import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import books from "./books";
import Book from "./components/Books";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
