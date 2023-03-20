import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import logo from "../assest/logo.jpg";
const Header = () => {
  const mystyle = {
    width: "50px",
  };
  return (
    <div>
      {/* desktop */}
      <div className="fixed shadow-md w-full h-16 px-2 md:px-4 flex justify-between ">
        <Link to={""}>
          <div className="flex items-center h-full ">
            <img src={logo} alt="" style={mystyle} />
          </div>
        </Link>

        <div className="flex gap-4 items-center">
          <nav className="flex gap-5 items-center text-slate-400">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About </Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-400">
            <BsCart4 />
          </div>

          <div className="text-2xl text-slate-400">
            <FaUserAlt />
          </div>
        </div>
      </div>

      {/* mobile */}
    </div>
  );
};

export default Header;
