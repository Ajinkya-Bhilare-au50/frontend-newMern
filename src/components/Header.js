import React from "react";
import logo from "../assest/logo.jpg";
const Header = () => {
  const mystyle = {
    width: "50px",
   
  };
  return (
    <div>
      {/* desktop */}
      <div className="fixed shadow-md w-full h-16 px-2 md:px-4">
        <div className="flex items-center h-full">
          <img src={logo} alt="" style={mystyle} />
        </div>
      </div>

      {/* mobile */}
    </div>
  );
};

export default Header;
