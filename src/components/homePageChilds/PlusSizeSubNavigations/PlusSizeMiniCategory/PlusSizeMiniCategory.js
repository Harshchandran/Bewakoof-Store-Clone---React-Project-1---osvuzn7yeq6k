import React from "react";
import { Link } from "react-router-dom";
import TrendingNow from "./Plus-Size-category-icon-Desktop-Plus-size-1706617205.webp";
import NewArrivals from "./Plus-Size-thumbnail-for-msite-and-desktop-Winterwear-1700206671.webp";
import PlusSize from "./PlusSize-Refresh-Msite-SLICE04-1689240183.webp";
import "./PlusSizeMiniCategory.css";

export const PlusSizeMiniCategory = () => {
  const MenMiniSubNavigationImages = [
    {
      url: NewArrivals,
      category: "tshirt",
    },
    {
      url: TrendingNow,
      category: "jogger",
    },
    {
      url: PlusSize,
      category: "jeans",
    },
  ];

  return (
    <>
      <div>plusSizeMiniCategory</div>
      <section className="plusSizeMiniCategory">
        <div className="plusSizeMiniCategoryContainer">
          {MenMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="plusSizeMiniCategoryBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="plusSizeMiniCategoryImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
