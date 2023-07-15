import React from "react";
import Button from "../component/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between space-x-5 py-5 items-center">
      <img src="/Images/Logo.svg" alt="logo" />
      <nav className="md:flex hidden ">
        <ul className="flex flex-row space-x-5">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <Button />
      <svg
      className="block md:hidden"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L4 6"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 12L4 12"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M20 18H4"
          stroke="#717171"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Navbar;
