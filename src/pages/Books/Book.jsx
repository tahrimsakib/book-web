import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ b }) => {
  console.log(b);
  const {
    bookId,
    author,
    bookName,
    image,
    publisher,
    rating,
    tags,
    yearOfPublishing,
  } = b;
  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-2xl p-4 mx-auto">
        <figure className="p-3 bg-gray-200 w-4/5 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between  gap-5 text-amber-600">
            {tags.map((tag) => (
              <button className="bg-gray-300 p-1.5 rounded-xl font-semibold">
                {tag}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{bookName}</h2>
            <h3>{yearOfPublishing}</h3>
          </div>
          <h2 className="text-xl">By: {author}</h2>
          <div className="card-actions justify-between items-center font-medium ">
            <div className=" bg-gray-300 p-1 rounded-[6px]">{publisher}</div>
            <div className=" flex gap-2 items-center">
              {rating} <Star></Star>{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
