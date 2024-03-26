import React from "react";
import { Link } from "react-router-dom";
import BestSellers from "./Men-Revamp-Thumbnail-Bestseller-IK-Desktop-1706098384.webp";
import TrendingNow from "./Men-Revamp-Thumbnail-Official-Collab-IK-Desktop-1706098383.webp";
import NewArrivals from "./Men-category-icon-Desktop-summer-IK-1706623387.webp";
import PlusSize from "./Men-new-thumbnail-icon-2022-D-230x320-plus-size-m-1682570372.webp";
import "./MenMiniCategory.css";

export const MenMiniCategory = () => {
  const MenMiniSubNavigationImages = [
    {
      url: NewArrivals,
      category: "New Arrivals",
    },
    {
      url: BestSellers,
      category: "Bestsellers",
    },
    {
      url: TrendingNow,
      category: "Trending",
    },
    {
      url: PlusSize,
      category: "Plus Size",
    },
  ];

  return (
    <>
      <div>MenMiniCategory</div>
      <section className="MenMiniSubNavigation">
        <div className="MenMiniSubNavigationContainer">
          {MenMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="MenMiniSubNavigationBox">
              <Link
                to="/productPage"
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="MenMiniSubNavigationImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="MenMiniSubNavigationName">{data.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
