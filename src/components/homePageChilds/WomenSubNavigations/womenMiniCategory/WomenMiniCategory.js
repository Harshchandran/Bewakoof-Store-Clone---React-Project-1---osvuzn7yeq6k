import React from "react";
import { Link } from "react-router-dom";
import TrendingWomen from "./Women-Revamp-Thumbnail-Official-Collab-RM-Desktop-1706098383.webp";
import BestSellersWomen from "./Women-category-icon-Desktop-Dresses-1706694019.webp";
import NewArrivalsWomen from "./Women-category-icon-Desktop-summer-RM-1706623387.webp";
import PlusSizeWomen from "./Women-new-thumbnail-icon-2022-D-230x320-plus-size-w-1682570372.webp";
import "./WomenMiniCategory.css";

export const WomenMiniCategory = () => {
  const WomenMiniSubNavigationImages = [
    {
      url: NewArrivalsWomen,
      category: "New Arrivals",
    },
    {
      url: BestSellersWomen,
      category: "Bestsellers",
    },
    {
      url: TrendingWomen,
      category: "Trending",
    },
    {
      url: PlusSizeWomen,
      category: "Plus Size",
    },
  ];
  return (
    <>
      <div>WomenMiniCategory</div>
      <section className="WomenMiniSubNavigation">
        <div className="WomenMiniSubNavigationContainer">
          {WomenMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="WomenMiniSubNavigationBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="WomenMiniSubNavigationImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="WomenMiniSubNavigationName">{data.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
