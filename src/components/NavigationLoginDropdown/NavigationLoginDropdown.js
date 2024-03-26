import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./NavigationLoginDropdown.css";

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
          Hi, {userName}
        </MenuItem>
        <MenuItem className="MenuItemNavigation" onClick={handleClose}>
          My Account
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          My Wishlist
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          My Orders
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={handleClose}>
          My Wallet
        </MenuItem>
        <MenuItem sx={{ fontSize: "0.875rem" }} onClick={Logout}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

// {userName ? (
//   <NavigationLoginDropdown userName={userName} />
// )
