import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStore } from "../../Utility/AddToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  const singleData = data.find((book) => book.bookId === bookId);
  const { image, author, category, review, tags } = singleData;

  const handleMakeAsRead = (id) => {
    addToStore(id)
  };

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
            <button key={tag}>{tag}</button>
          ))}
        </div>
        <div className="">
          <button
            onClick={() => handleMakeAsRead(id)}
            className="mr-4 btn btn-outline"
          >
            Make as read
          </button>
          <button className="mr-4 btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
