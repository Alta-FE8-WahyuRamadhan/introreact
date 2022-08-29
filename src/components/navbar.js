import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";
//MdOutlineLocalMovies
const Navbar = () => {
  return (
    <>
      <nav className="w-full h-14 bg-neutral-700 px-3 py-1 flex justify-between">
        <div className="flex">
          <MdOutlineLocalMovies className="text-white w-8 h-8 mt-1 sm:w-11 sm:h-11" />
          <h1 className="text-white font-bold mt-2 ml-1 text-md sm:text-xl">
            Movies
          </h1>
          <MdOutlineLocalMovies className="text-white w-8 h-8 mt-1 sm:w-11 sm:h-11" />
        </div>
        <button className="grid text-white font-bold mt-2 ml-1 text-md sm:text-xl">
          Home
        </button>
        <button className="text-white grid font-bold mt-2 ml-1 text-md sm:text-xl">
          Favourites
        </button>
      </nav>
    </>
  );
};
export default Navbar;
