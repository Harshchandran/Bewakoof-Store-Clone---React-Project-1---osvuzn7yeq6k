import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Search.css";

export default function Search() {
  const [inputSearchData, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="searchDataContainer">
        <SearchIcon fontSize="small" className="searchIcon" />
        <input
          type="text"
          id="searchData"
          name="searchData"
          placeholder="Search by product, category or collection"
          value={inputSearchData}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
