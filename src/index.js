import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import books from "./books";

// function Book({ img, title, author, children }) {
function Book({ img, title, author }) {
  return (
    <article className="book">
      <img src={img} alt="book-img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

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
