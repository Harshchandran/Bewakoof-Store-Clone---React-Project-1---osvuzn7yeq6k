import React from "react";
import "./HeroImagePlusSize.css";
import MenPlusSize from "./Men-Plus-Size--desktop-store-banner-1706675714.webp";
import WomenPlusSize from "./Women-Plus-Size--desktop-store-banner-1706675713.webp";
import { Link } from "react-router-dom";

export const HeroImagePlusSize = () => {
  const heroImagePlusSize = [
    {
      url: MenPlusSize,
      category: "pyjamas",
    },
    {
      url: WomenPlusSize,
      category: "jogger",
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
                state={{ category: data.category }}
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
