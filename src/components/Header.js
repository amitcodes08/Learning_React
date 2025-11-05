import {LOGO_URL} from "../utilis/constants"
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Header = () => {
  
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-28 p-2">
        <img className="" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center px-4">
        <ul className="flex p-4 m-4">
        <li className="px-4">
          Online Status: {useOnlineStatus() ? "✅ Online" : "🔴 Offline"}
        </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;