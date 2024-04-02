import React from "react";
import "./HeroImagePlusSize.css";
import MenPlusSize from "./Men-Plus-Size--desktop-store-banner-1706675714.webp";
import WomenPlusSize from "./Women-Plus-Size--desktop-store-banner-1706675713.webp";
import { Link } from "react-router-dom";

export const HeroImagePlusSize = () => {
  const heroImagePlusSize = [
    {
      url: MenPlusSize,
      filter: {
        gender: "Men",
        size: "XXL",
      },
    },
    {
      url: WomenPlusSize,
      filter: {
        size: "XXL",
        gender: "Women",
      },
    },
  ];

  return (
    <>
      <section>
        <div className="heroImagePlusSizeContainer">
          {heroImagePlusSize.map((data, index) => (
            <div key={index} className="heroImagePlusSizeBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="heroImagePlusSizeImage"
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
