import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./SortBy.css";

export const SortBy = () => {
  const [sortBy, setSortBy] = useState("Popular");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="sortByButtonBox"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h6 className="sortByButtonTag">Sort By </h6>
        <p className="sortByValue">{sortBy}</p>
        <ExpandMoreRoundedIcon style={{ color: "black" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={(e) => {
            handleClose();
            setSortBy(e.target.textContent);
          }}
        >
          Popular
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose();
            setSortBy(e.target.textContent);
          }}
        >
          New
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose();
            setSortBy(e.target.textContent);
          }}
        >
          Price : High to Low
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            handleClose();
            setSortBy(e.target.textContent);
          }}
        >
          Price : Low to High
        </MenuItem>
      </Menu>
    </div>
  );
};
