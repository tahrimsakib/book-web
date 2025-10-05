import { Star } from "lucide-react";
import React from "react";

const Book = ({ b }) => {
  console.log(b);
  const { author, bookName, category, image, publisher, rating, review } = b;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border p-4">
      <figure className="p-3 bg-gray-200 w-4/5 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <p>{category}</p>
        </div>
        <h2 className="text-2xl font-semibold">{bookName}</h2>
        <h2 className="text-xl">{author}</h2>
        <p>{review}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{publisher}</div>
          <div className="badge badge-outline">
            {rating} <Star></Star>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
