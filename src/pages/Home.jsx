import React from "react";
import Banner from "../Componenet/Banner";
import { useLoaderData } from "react-router";
import Books from "./Books/Books";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className="dropdown dropdown-bottom dropdown-end flex items-center justify-end">
        <div tabIndex={0} role="button" className="btn btn-soft btn-primary m-1">
          Sort by
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm "
        >
          <li className="btn btn-soft btn-primary">
            <a>Pages</a>
          </li>
          <li className="btn btn-soft btn-primary">
            <a>Ratting</a>
          </li>
        </ul>
      </div>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
