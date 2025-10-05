import React from "react";
import Banner from "../Componenet/Banner";
import { useLoaderData } from "react-router";
import Books from "./Books";

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
