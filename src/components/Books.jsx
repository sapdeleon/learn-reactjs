import React from "react";

const Books = ({ img, title, author }) => {
  const complexExample = (author) => console.log(author);
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book-img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="submit" onClick={() => alert("Author: " + author)}>
        Submit
      </button>
      <button type="submit" onClick={() => complexExample(author)}>
        Complex
      </button>
      <button type="submit" onClick={clickHandler}>
        Click Me
      </button>
    </article>
  );
};

export default Books;
