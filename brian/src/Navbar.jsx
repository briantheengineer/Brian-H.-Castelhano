import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-[#1CA857]">My Blog</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-700 hover:text-[#1CA857]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="text-gray-700 hover:text-[#1CA857]">
                All Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
