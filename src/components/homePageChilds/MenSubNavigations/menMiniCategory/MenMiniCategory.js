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
      filter: {
        sellerTag: "new arrival",
        gender: "Men",
      },
      type: "New Arrivals",
    },
    {
      url: BestSellers,
      filter: {
        sellerTag: "best seller",
        gender: "Men",
      },
      type: "Bestsellers",
    },
    {
      url: TrendingNow,
      filter: {
        sellerTag: "trending",
        gender: "Men",
      },
      type: "Trending",
    },
    {
      url: PlusSize,
      filter: {
        size: "XXL",
        gender: "Men",
      },
      type: "Plus Size",
    },
  ];

  return (
    <>
      <section className="MenMiniSubNavigation">
        <div className="MenMiniSubNavigationContainer">
          {MenMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="MenMiniSubNavigationBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="MenMiniSubNavigationImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="MenMiniSubNavigationName">{data.type}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
