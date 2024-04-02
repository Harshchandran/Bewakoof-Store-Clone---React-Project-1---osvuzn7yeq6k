import React from "react";
import { Link } from "react-router-dom";
import "./BannerImagesPlusSize.css";
import NewArrivals from "./Plus-Size1000070551-1707392711.jpg";
import PlusSize from "./PlusSize-Refresh-desktop-slic-air-banner-1689249103.webp";

export const BannerImagesPlusSize = () => {
  return (
    <section className="bannerImagesPlusSize">
      <div className="bannerImagesPlusSizeContainer">
        <div className="bannerImagesPlusSizeBox">
          <Link
            to="/productPage"
            state={{ filter: { size: "XXL", sellerTag: "trending" } }}
          >
            <img
              className="bannerImagesPlusSizeImage"
              src={NewArrivals}
              alt="NewArrivals"
            />
          </Link>
        </div>

        <div className="bannerImagesPlusSizeBox">
          <Link
            to="/productPage"
            state={{ filter: { size: "XXL", sellerTag: "new arrival" } }}
          >
            <img
              className="bannerImagesPlusSizeImage"
              src={PlusSize}
              alt="PlusSize"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
