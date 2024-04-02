import React from "react";
import "./DontMissMen.css";
import { Link } from "react-router-dom";
import TShirt from "./Men-DESKTOP---MID-SIZE-BANNER-ik--2--1710311360.webp";
import Jeans from "./Men-DESKTOP---MID-SIZE-BANNER-ik-jeans--1710257654.webp";
import Shorts from "./new-mid-banner-shorts-withbdayunit-1680264853.jpg";
import Pants from "./Men-DESKTOP---MID-SIZE-BANNER-men-casual-pants-1710482087.webp";

export const DontMissMen = () => {
  const DontMissMenImages = [
    {
      url: TShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Men",
      },
    },
    {
      url: Pants,
      filter: {
        subCategory: "trouser",
        gender: "Men",
      },
    },
    {
      url: Shorts,
      filter: {
        subCategory: "shorts",
        gender: "Men",
      },
    },
    {
      url: Jeans,
      filter: {
        subCategory: "jeans",
        gender: "Men",
      },
    },
  ];

  return (
    <>
      <section className="dontMissMen">
        <h4>TOO HOT TO BE MISSED</h4>
        <div className="dontMissMenContainer">
          {DontMissMenImages.map((data, index) => (
            <div key={index} className="dontMissMenBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="dontMissMenImage"
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
