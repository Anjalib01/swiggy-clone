import { useState } from "react";
import { logoImg } from "./constants.js";

const Title = () => (
  <a href="/">
    <img className="logo" src={logoImg} alt="logo" />
  </a>
);

const HeadComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default HeadComponent;
