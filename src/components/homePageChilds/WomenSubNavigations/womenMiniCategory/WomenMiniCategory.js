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
      filter: {
        sellerTag: "new arrival",
        gender: "Women",
      },
      type: "New Arrivals",
    },
    {
      url: BestSellersWomen,
      filter: {
        sellerTag: "best seller",
        gender: "Women",
      },
      type: "Bestsellers",
    },
    {
      url: TrendingWomen,
      filter: {
        sellerTag: "trending",
        gender: "Women",
      },
      type: "Trending",
    },
    {
      url: PlusSizeWomen,
      filter: {
        size: "XXL",
        gender: "Women",
      },
      type: "Plus Size",
    },
  ];
  return (
    <>
      <section className="WomenMiniSubNavigation">
        <div className="WomenMiniSubNavigationContainer">
          {WomenMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="WomenMiniSubNavigationBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="WomenMiniSubNavigationImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="WomenMiniSubNavigationName">{data.type}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
