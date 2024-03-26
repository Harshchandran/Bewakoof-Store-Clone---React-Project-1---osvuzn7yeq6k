import React from "react";
import CoverFullImage from "../homePage/Pajamas-Desktop-Thin-strip-banner.webp";
import "../homePage/HomePageCoverImage.css";
export const HomePageCoverImage = () => {
  return (
    <>
      <div className="homepageCoverImageContainer">
        <img
          className="homepageCoverImage"
          src={CoverFullImage}
          alt="Pajamas Deals"
        />
      </div>
    </>
  );
};
