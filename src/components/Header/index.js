import React, { useState } from "react";
import Sidebar from "./Sidebar/index";
import Navbar from "./Navbar/index";

//Material Components
import Box from "@material-ui/core/Box";

const Header = (props) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const { children } = props;
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Header;
