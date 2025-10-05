import React from "react";
import Navbar from "../../Componenet/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Componenet/Footer";

const Root = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
