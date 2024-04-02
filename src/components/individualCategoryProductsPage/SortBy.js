import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useState } from "react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import "./SortBy.css";

export const SortBy = ({
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  setFiltersApplied,
}) => {
  const [sortBy, setSortBy] = useState("Popular");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sortedData, setSortedData] = useState([]);

  const SortingUrl = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={"rating":-1}`;
  const projectId = "f105bi07c590";

  async function getSortingFilters(api) {
    try {
      const response = await fetch(api, {
        method: "GET",
        headers: {
          projectId: projectId,
        },
      });

      const data = await response.json();

      setSortedData(data.data);
    } catch (error) {
      console.error("Error fetching Sorting", error);
    }
  }

  useEffect(() => {
    getSortingFilters(SortingUrl);
  }, []);

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
          sx={{ fontSize: "0.75rem", color: "#000" }}
          onClick={() => {
            handleClose();
            setSortBy("Popular");
            setFiltersApplied({ sellerTag: "trending" });
          }}
        >
          Popular
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "0.75rem", color: "#000" }}
          onClick={() => {
            handleClose();
            setSortBy("New");
            setFiltersApplied({ sellerTag: "new arrival" });
          }}
        >
          New
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "0.75rem", color: "#000" }}
          onClick={() => {
            handleClose();
            setSortBy("Price : High to Low");
            sortByPriceHighToLow();
          }}
        >
          Price : High to Low
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "0.75rem", color: "#000" }}
          onClick={() => {
            handleClose();
            setSortBy("Price : Low to High");
            sortByPriceLowToHigh();
          }}
        >
          Price : Low to High
        </MenuItem>
      </Menu>
    </div>
  );
};
