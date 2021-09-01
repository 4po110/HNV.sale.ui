import React, { useState } from "react";

function Navbar() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState();
  const handleConnect = async () => {
    console.log("trying to connect");
    window.ethereum.enable();
    if (window.ethereum.isConnected()) setConnected(true);
  };
  return (
    <header>
      <div class="container-fluid nopadding">
        <nav>
          <a href="#" class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </a>

          <div class="menu-item clearfix">
            <ul class="menu-ul clearfix">
              <li>
                <a href="#aboutsection" class="location-anchor">
                  About
                </a>
              </li>
              <li>
                <a href="#what-nav" class="location-anchor">
                  Story
                </a>
              </li>
              <li>
                <a href="#roadmap-nav" class="location-anchor last-child">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#faq-nav" class="location-anchor">
                  FAQ
                </a>
              </li>
            </ul>

            <div class="menu-item-button">
              {!connected ? (
                <div
                  id="no-underline"
                  onClick={handleConnect}
                  class="create-account-button button-hover-blue location-anchor uppercase"
                >
                  <span>CONNECT</span>
                </div>
              ) : (
                <div
                  id="no-underline"
                  class="create-account-button button-hover-blue location-anchor uppercase"
                >
                  <span>• CONNECTED</span>
                </div>
              )}
            </div>
          </div>

          <div class="slide-menu-overlay"></div>

          <div class="slide-menu">
            <a href="javascript:void(0)" class="close-slide-menu">
              <i class="far fa-times-circle"></i>
            </a>

            <ul class="menu-ul clearfix">
              <li>
                <a href="#aboutsection" class="location-anchor">
                  About
                </a>
              </li>
              <li>
                <a href="#what-nav" class="location-anchor">
                  Story
                </a>
              </li>
              <li>
                <a href="#roadmap-nav" class="location-anchor last-child">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#faq-nav" class="location-anchor">
                  FAQ
                </a>
              </li>
            </ul>

            <div class="create-account-button">
              <a
                href="javascript:void(0)"
                class="create-account-button button-hover-blue location-anchor uppercase"
              >
                <span>Connect</span>
              </a>

              <div class="clearfix"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
