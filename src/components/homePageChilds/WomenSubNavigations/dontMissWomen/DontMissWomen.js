import React from "react";
import { Link } from "react-router-dom";
import "./DontMissWomen.css";
import TShirt from "./Women-DESKTOP---MID-SIZE-BANNER-RM--1--1710311214.webp";
import Jeans from "./Women-DESKTOP---MID-SIZE-BANNER-rm-jeans--1710251985.webp";
import Pants from "./Women-DESKTOP---MID-SIZE-BANNER-women-1710481024.webp";
import BoyFriendTShirt from "./Women-boyfriend-t-shirt-midsize-Desktop-banner--2--1710481856.webp";

export const DontMissWomen = () => {
  const DontMissWomenImages = [
    {
      url: Jeans,
      filter: {
        subCategory: "jeans",
        gender: "Women",
      },
    },
    {
      url: BoyFriendTShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Women",
      },
    },
    {
      url: Pants,
      filter: {
        subCategory: "jumpsuit",
        gender: "Women",
      },
    },
    {
      url: TShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Women",
      },
    },
  ];

  return (
    <>
      <section className="dontMissWomen">
        <h5>TOO HOT TO BE MISSED</h5>
        <div className="dontMissWomenContainer">
          {DontMissWomenImages.map((data, index) => (
            <div key={index} className="dontMissWomenBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="dontMissWomenImage"
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
