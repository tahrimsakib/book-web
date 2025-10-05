import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
    tags,
  } = singleData;

  return (
    <div className="flex justify-between gap-12 ">
      <div className="bg-gray-300 ">
        <img className="max-w-[320px]" src={image} alt="" />
      </div>
      <div>
        <h1>{author} </h1>
        <h1>By: {author} </h1>
        <h1>{category} </h1>
        <h1>Review: {review} </h1>
        <div className="flex justify-end gap-7">
          {tags.map((tag) => (
            <button>{tag}</button>
          ))}
        </div>
        <div className="">
          <button className="mr-4 btn btn-outline">Default</button>
          <button className="mr-4 btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
