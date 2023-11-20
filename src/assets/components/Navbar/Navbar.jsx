import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <h2>Time Calculator</h2>
      <a href="https://github.com/MdNData" target="_blank">
        <FaGithub />
      </a>
    </nav>
  );
};

export default Navbar;
