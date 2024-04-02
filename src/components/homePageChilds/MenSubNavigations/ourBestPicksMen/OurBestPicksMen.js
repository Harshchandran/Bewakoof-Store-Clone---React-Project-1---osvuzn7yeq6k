import React from "react";
import PlusSize from "./Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.webp";
import TShirt from "./720x420-Midsize-bannner-Combos-1699334569--2--1704026835.webp";
import "./OurBestPicksMen.css";
import { Link } from "react-router-dom";

export const OurBestPicksMen = () => {
  const ourBestPicksMenImages = [
    {
      url: TShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Men",
      },
    },
    {
      url: PlusSize,
      filter: {
        subCategory: "tshirt",
        gender: "Men",
        size: "XXL",
      },
    },
  ];

  return (
    <>
      <section className="ourBestPicksMen">
        <h4>OUR BEST PICKS</h4>
        <div className="ourBestPicksMenContainer">
          {ourBestPicksMenImages.map((data, index) => (
            <div key={index} className="ourBestPicksMenBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="ourBestPicksMenImage"
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
