import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-green-600 p-4 text-green-950 ">
      <Link  className=" hover:text-white" to="home">Home</Link>
      <Link className="ml-5 hover:text-white" to="about">About</Link>
      <Link className="ml-5 hover:text-white" to="products">Products</Link>
      <Link className="ml-5 hover:text-white" to="career">Career</Link>
      <Link className="ml-5 hover:text-white" to="contacts">Contacts</Link>
    </div>
  );
}

export default NavBar;
