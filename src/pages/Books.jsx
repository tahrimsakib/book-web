import React from "react";
import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((b) => (
        <Book b={b} key={b.bookId}></Book>
      ))}
    </div>
  );
};

export default Books;
