import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed w-full h-[80px] flex items-center justify-between bg-[#0a192f] text-gray-300 px-4">
      <div>
        <span className="text-4xl font-bold text-pink-600">Portfolio.</span>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <a className="hover:font-bold" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#works">
            Works
          </a>
        </li>
        <li>
          <a className="hover:font-bold" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      {/* Hamburger */}
      <div
        className="md:hidden z-10 text-3xl cursor-pointer"
        onClick={handleClick}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu */}

      <ul
        className={
          menuOpen
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center"
            : "hidden"
        }
      >
        <MenuItems onClick={() => setMenuOpen(false)} href="#home">
          Home
        </MenuItems>
        <MenuItems onClick={() => setMenuOpen(false)} href="#about">
          About
        </MenuItems>
        <MenuItems onClick={() => setMenuOpen(false)} href="#skills">
          Skills
        </MenuItems>
        <MenuItems onClick={() => setMenuOpen(false)} href="#works">
          Works
        </MenuItems>
        <MenuItems onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </MenuItems>
      </ul>
      {/* Socials */}
      <div className="hidden lg:flex fixed top-[35%] left-[0px] flex-col">
        <ul>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/sakti-sumant-das-68b6871a1/"
              target="_blank"
              className="flex items-center justify-between text-gray-300 w-full"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] flex items-center justify-center">
            <a
              href="https://github.com/dev-shakti"
              target="_blank"
              className="flex items-center justify-between text-gray-300 w-full"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] flex items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1W2y3A7FAQkVvvIcsHEw68sMU6Rw3aRhf/view?usp=sharing"
              target="_blank"
              className="flex items-center justify-between text-gray-300 w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
