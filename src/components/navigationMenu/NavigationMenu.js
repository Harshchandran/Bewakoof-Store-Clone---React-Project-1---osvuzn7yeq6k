import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { light } from "@mui/material/styles/createPalette";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigationLoginDropdown } from "../NavigationLoginDropdown/NavigationLoginDropdown.js";
import Dropdown from "../dropdown/Dropdown";
import BewakoofLogo from "../navigationMenu/ic-web-head-bwk-primary-logo-eyes.svg";
import Search from "../pages/Search";
import { DrawerComponent } from "./DrawerComponent";
import "./NavigationMenu.css";
import Logo from "./bwkf-trademark-logo.svg";

export default function NavigationMenu({
  noOfItemsInCart,
  setNoOfItemsInCart,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [noOfItemsInCart, setNoOfItemsInCart] = useState("");

  const [gender, setGender] = useState("");

  const [userName, setUserName] = useState("");
  const Navigate = useNavigate();

  const handleDropdown = () => {
    setShowDropdown(true);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  const updateCartItemNumber = () => {
    if (localStorage.getItem("cartItemsNumber")) {
      const ItemsInCart = JSON.parse(localStorage.getItem("cartItemsNumber"));
      setNoOfItemsInCart(ItemsInCart);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserName(userData.name);
    }

    if (localStorage.getItem("cartItemsNumber")) {
      const ItemsInCart = JSON.parse(localStorage.getItem("cartItemsNumber"));
      setNoOfItemsInCart(ItemsInCart);
    }
  }, []);

  return (
    <>
      <nav className="mainNavigation">
        <div className="navigationBarContainer">
          <ul className="navigationBar">
            <li>
              <Link to="/">
                <img className="logoImage" src={Logo} alt="Bewakoof" />
              </Link>
            </li>
            <li>
              <Link
                // to="/men-clothing"
                to="/productPage"
                state={{
                  filter: {
                    gender: "Men",
                  },
                }}
                className="navigationBarData"
                onMouseOver={() => {
                  setGender("Men");
                  handleDropdown();
                }}
                onMouseLeave={handleDropdownClose}
              >
                MEN
              </Link>
            </li>

            <li>
              <Link
                // to="/women-clothing"
                to="/productPage"
                state={{
                  filter: {
                    gender: "Women",
                  },
                }}
                className="navigationBarData"
                onMouseOver={() => {
                  setGender("Women");
                  handleDropdown();
                }}
                onMouseLeave={handleDropdownClose}
              >
                WOMEN
              </Link>
            </li>
          </ul>

          <ul className="navigationBar">
            <li>
              <Search />
            </li>
            <li>|</li>
            <li>
              {userName ? (
                <NavigationLoginDropdown userName={userName} />
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            {/* <li>
              <Link to="/wishlist">
                <FavoriteBorderOutlinedIcon />
              </Link>
            </li> */}
            <li>
              <Link to="/cart">
                <div className="NavigationBarCartBox">
                  <ShoppingBagOutlinedIcon style={{ fontWeight: light }} />
                  {noOfItemsInCart > 0 ? (
                    <sup className="superSetCartItemsNumber">
                      {noOfItemsInCart}
                    </sup>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <hr className="navigationBarLine"></hr>

        <Dropdown
          gender={gender}
          show={showDropdown}
          setShow={setShowDropdown}
        />
      </nav>

      <nav className="navigationBarMobileContainer">
        <div className="navigationBar">
          <ul className="navigationBarMini">
            <li>
              <DrawerComponent />
            </li>
            <li>
              <Link to="/">
                <img src={BewakoofLogo} alt="Bewakoof" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="navigationBarMini">
            <li>
              <Link to="/">
                <SearchRoundedIcon />
              </Link>
            </li>
            {/* <li>
              <Link to="/wishlist">
                <FavoriteBorderRoundedIcon />
              </Link>
            </li> */}
            <li>
              <Link to="/cart">
                <div className="NavigationBarCartBox">
                  <LocalMallOutlinedIcon />
                  {noOfItemsInCart > 0 ? (
                    <sup className="superSetCartItemsNumber">
                      {noOfItemsInCart}
                    </sup>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
