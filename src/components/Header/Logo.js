import React from "react";
import logo from "../../assets/Logo.png";
//import logo from "../../assets/Logo.png";

function Logo() {
  // Import result is the URL of your image
  return (
    <img
      src={logo}
      alt='logo'
      style={{
        maxWidth: "50%",
        height: "auto",
      }}
    />
  );
}

export default Logo;
