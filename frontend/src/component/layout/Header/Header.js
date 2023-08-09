import { ReactNavbar } from "overlay-navbar";
import React from 'react';
import logo from "../../../images/logo.png";


const Header = () => {
  return <ReactNavbar
    burgerColorHover="green"
    logo={logo}
    logoWidth="20vmax"
    navColor1="white"
    logoHoverSize="10px"
    logoHoverColor="#eb4034"
    link1Text="Home"
    link2Text="Product"
    link3Text="Contact"
    link4Text="About"
    link1Url="/"
    link2Url="/product"
    link3Url="/contact"
    link4Url="/about"
    nav1justifyContent="flex-end"
    nav2justifyContent="flex-end"
    nav3justifyContent="flex-start"
    nav4justifyContent="flex-start"
    link1ColorHover="#eb4034"
    link1Margin="1vmax"
    profileIconUrl="/login"
    profileIconColor="rgba(35, 35, 35,0.8)"
    searchIconColor="rgba(35, 35, 35,0.8)"
    cartIconColor="rgba(35, 35, 35,0.8)"
    profileIconColorHover="#eb4034"
    searchIconColorHover="#eb4034"
    cartIconColorHover="#eb4034"
    cartIconMargin="1vmax"

  />;
}

export default Header