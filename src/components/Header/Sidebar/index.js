import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='/' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='/select-nfts' onClick={toggle}>
            Select NFTs
          </SidebarLink>
          <SidebarLink to='/nft' onClick={toggle}>
            nft
          </SidebarLink>
          <SidebarLink to='/create-an-oven' onClick={toggle}></SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/connect'>Connect Wallet</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
