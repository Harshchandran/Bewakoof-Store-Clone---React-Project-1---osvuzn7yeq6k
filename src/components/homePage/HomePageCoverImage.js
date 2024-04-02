import React from "react";
import CoverFullImage from "../homePage/Pajamas-Desktop-Thin-strip-banner.webp";
import "../homePage/HomePageCoverImage.css";
import { Link } from "react-router-dom";
export const HomePageCoverImage = () => {
  return (
    <>
      <div className="homepageCoverImageContainer">
        <Link
          to="/productPage"
          state={{
            filter: {
              subCategory: "pyjamas",
            },
          }}
        >
          <img
            className="homepageCoverImage"
            src={CoverFullImage}
            alt="Pajamas Deals"
          />
        </Link>
      </div>
    </>
  );
};
