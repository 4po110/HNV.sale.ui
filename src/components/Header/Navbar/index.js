import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Navbar = ({ toggle }) => {
  const history = useHistory();
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState();
  const handleConnect = async () => {
    window.ethereum.enable();
    if (window.ethereum.isConnected()) setConnected(true);
  };
  const mintNinja = async () => {};
  return (
    <>
      <Nav style={{ marginTop: "0%" }}>
        <div>
          <Grid style={{ width: "80%", margin: "auto" }} container spacing={0}>
            <Grid item xs={4}>
              <NavMenu>
                <NavLogo to="/">Hidden Ninja Village</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
              </NavMenu>
            </Grid>
            <Grid item xs={5}>
              <NavMenu>
                <NavItem
                  disabled
                  // onClick={() => {
                  //   history.push("/collections");
                  // }}
                >
                  <NavLinks to="#">Distribution</NavLinks>
                </NavItem>
                <NavItem
                  disabled
                  // onClick={() => {
                  //   history.push("/myNFT");
                  // }}
                >
                  <NavLinks to="#">Mint</NavLinks>
                </NavItem>
                <NavItem
                  disabled
                  // onClick={() => {
                  //   history.push("/myNFT");
                  // }}
                >
                  <NavLinks to="#">My Ninjas</NavLinks>
                </NavItem>
              </NavMenu>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <NavMenu style={{ margin: "5px" }}>
                <NavBtn style={{ textAlign: "center" }}>
                  {!connected ? (
                    <Button
                      style={{
                        borderRadius: "15px",
                        fontSize: "0.7em",
                        fontWeight: "700",
                        letterSpacing: "2px",
                      }}
                      variant="contained"
                      size="small"
                      onClick={handleConnect}
                    >
                      Connect Wallet
                    </Button>
                  ) : (
                    <span
                      style={{
                        paddingTop: "6px",
                        paddingLeft: "10px",
                        borderRadius: "15px",
                        fontSize: "1em",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        color: "white",
                      }}
                    >
                      • connected
                    </span>
                  )}
                </NavBtn>
              </NavMenu>
            </Grid>
          </Grid>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
