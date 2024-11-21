import { useState } from "react";

// import { a } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full max-w-[100rem] items-center justify-between bg-[#D8C3A5] px-6 py-2 shadow-md">
        {/* Logo */}
        <section><a to={'/'}>Logo</a></section>

        {/* Menu Mobile */}
        <section>
          <button
            className="fixed right-6 top-2"
            onClick={() => setIsHamburger(!isHamburger)}
          >
            {!isHamburger ? (
              <i className="ri-menu-line text-xl font-bold sm:hidden"></i>
            ) : (
              <i className="ri-close-fill text-xl font-bold sm:hidden"></i>
            )}
          </button>
          <ul className="hidden sm:flex sm:gap-6 ">
            <Link
              to={"/"}
              className="font-medium  hover:font-semibold focus:font-semibold focus:underline"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="font-medium  hover:font-semibold focus:font-semibold focus:underline"
            >
              About
            </Link>
            <Link
              to={"/add-service"}
              className="font-medium  hover:font-semibold focus:font-semibold focus:underline"
            >
              Add Services
            </Link>
            <Link
              to={"/signup"}
              className="font-medium  hover:font-semibold focus:font-semibold focus:underline"
            >
              Sign up
            </Link>
            <Link
              to={"/login"}
              className="font-medium  hover:font-semibold focus:font-semibold focus:underline"
            >
              Login
            </Link>
          </ul>
        </section>

        {/* Menu */}
        <NavbarMobile isHamburger={isHamburger} />
      </nav>
    </>
  );
};

export default NavBar;
