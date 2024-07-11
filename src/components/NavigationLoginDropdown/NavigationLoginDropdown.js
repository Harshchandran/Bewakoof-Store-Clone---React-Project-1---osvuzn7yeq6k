import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import "./NavigationLoginDropdown.css";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export const NavigationLoginDropdown = ({ userName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    localStorage.removeItem("cartItemsNumber");

    // Navigate("/login/email");
    window.location.href = "/login";
  };

  return (
    <div>
      <div
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <PermIdentityOutlinedIcon />
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ left: "-4rem" }}
      >
        <MenuItem
          className="Mui-focusVisible .Mui-disabled navigationLoginDropdownMenu"
          sx={{ color: "#949494", fontSize: "0.875rem" }}
          // onClick={handleClose}
        >
          Hi,{" "}
          {userName
            ? userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
            : ""}
        </MenuItem>

        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          <Link to="/orders" style={{ fontSize: "0.875rem" }}>
            {/* <ShoppingCartCheckoutIcon />  */}
            My Orders
          </Link>
        </MenuItem>

        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={Logout}>
          {/* <LogoutIcon />  */}
          Logout
        </MenuItem>

        {/* <MenuItem className="MenuItemNavigation" onClick={handleClose}>
          My Account
        </MenuItem>

        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          My Wishlist
        </MenuItem>

        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          My Wallet
        </MenuItem> */}
      </Menu>
    </div>
  );
};

// {userName ? (
//   <NavigationLoginDropdown userName={userName} />
// )
