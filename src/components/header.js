import { useState } from "react";
import { logoImg } from "./constants.js";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="h-14" src={logoImg} alt="logo" />
  </a>
);

const HeadComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex border-2 border-[#2c4152] items-center justify-around h-20 m-5">
      <Title />
      <div>
        <ul className="flex space-x-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="bg-[#2c4152] text-amber-50 w-20 h-10 rounded-2xl"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default HeadComponent;
