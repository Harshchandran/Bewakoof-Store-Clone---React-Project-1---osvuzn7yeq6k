import React from "react";
import PlusSize from "./Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.webp";
import TShirt from "./720x420-Midsize-bannner-Combos-1699334569--2--1704026835.webp";
import "./OurBestPicksWomen.css";
import { Link } from "react-router-dom";

export const OurBestPicksWomen = () => {
  const ourBestPicksWomenImages = [
    {
      url: TShirt,
      category: "tshirt",
    },
    {
      url: PlusSize,
      category: "tshirt",
    },
  ];

  return (
    <>
      <section className="ourBestPicksWomen">
        <h5>OUR BEST PICKS</h5>
        <div className="ourBestPicksWomenContainer">
          {ourBestPicksWomenImages.map((data, index) => (
            <div key={index} className="ourBestPicksWomenBox">
              <Link
                to="/productPage"
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="ourBestPicksWomenImage"
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
