import React from "react";
import { Link } from "react-router-dom";
// import { a } from "react-router-dom";

const NavbarMobile = ({ isHamburger }) => {
  return (
    <div
      className={`${isHamburger ? "h-full w-full" : "hidden"} fixed right-0 top-10 z-50`}
    >
      <ul className="h-fit w-full bg-red-500 p-3">
        <li>
          
          <a

            to={"/"}
            className="block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 focus:bg-slate-800 focus:text-white"
          >
            Home
          </a>
        </li>

        <li>
          <a
            to={"/about"}
            className="block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 focus:bg-slate-800 focus:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            to={"/add-service"}
            className="block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 focus:bg-slate-800 focus:text-white"
          >
            Add Services
          </a>
        </li>
        <li>
          <a
            to={"/signup"}
            className="block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 focus:bg-slate-800 focus:text-white"
          >
            Sign up
          </a>
        </li>
        <li>
          <a
            to={"/login"}
            className="block w-full rounded-lg py-2 pl-2 text-left font-semibold hover:bg-slate-200 focus:bg-slate-800 focus:text-white"
          >
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
