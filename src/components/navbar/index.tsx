import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex py-4 sm:py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[118px] h-[32px]" />

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal text-white cursor-pointer text-base mr-10 last-of-type:mr-0`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      {/* <Mobile> Nav */}
      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={isOpen ? close : menu}
          alt="menu"
          className="w-5 h-5 object-contain"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-16 right-0 mr-4 mt-2 min-w-[140px] rounded sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`font-poppins font-normal text-white cursor-pointer text-base mb-4 last-of-type:mb-0`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
