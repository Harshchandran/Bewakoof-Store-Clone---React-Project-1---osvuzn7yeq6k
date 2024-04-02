import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Search() {
  const [inputSearchData, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/productPage", { state: { filter: { subCategory: "jeans" } } });
    }
  };

  const [searchFieldOptions, setSearchFieldOptions] = useState(" Options");

  return (
    <>
      <div className="searchDataContainer">
        <SearchIcon fontSize="small" className="searchIcon" />
        {/* <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "0.5rem" }} />}
            sx={{
              fontSize: "0.5rem",
              background: "#eeeeee",
              color: "#717171",
              padding: "0.1rem 0.4rem",
              fontWeight: 600,
              "&:hover": {
                fontSize: "0.5rem",
                background: "#eeeeee",
                color: "#717171",
                padding: "0.1rem 0.4rem",
                fontWeight: 600,
              },
            }}
          >
            {searchFieldOptions}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              onClick={(e) => {
                handleClose();
                setSearchFieldOptions("Gender");
              }}
              disableRipple
            >
              Gender
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose();
                setSearchFieldOptions("Color");
              }}
              disableRipple
            >
              Color
            </MenuItem>
             <Divider sx={{ my: 0.5 }} /> 
            <MenuItem
              onClick={(e) => {
                handleClose();
                setSearchFieldOptions("Category");
              }}
              disableRipple
            >
              Category
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose();
                setSearchFieldOptions("Size");
              }}
              disableRipple
            >
              Size
            </MenuItem>
          </StyledMenu>
        </div> */}
        <input
          type="text"
          id="searchData"
          name="searchData"
          placeholder="Search by product, category or collection"
          value={inputSearchData}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </>
  );
}
