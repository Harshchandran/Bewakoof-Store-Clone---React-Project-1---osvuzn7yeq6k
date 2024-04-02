import React, { useEffect, useState } from "react";
import Pajamas from "./1x1-hc-pajama-women-1709216613.webp";
import Joggers from "./Cargo-Joggers-Women-1x1-Banner--2--1710311395.webp";
import TShirt from "./Women-HC-BANNERS---1X1-RM---CROP-TOP--2--1710481114.webp";
import { Link } from "react-router-dom";
import "./WomenBestOfBewakoof.css";

export const WomenBestOfBewakoof = () => {
  const womenBestOfBewakoofImages = [
    {
      url: Pajamas,
      filter: {
        subCategory: "jumpsuit",
        gender: "Women",
      },
    },
    {
      url: Joggers,
      filter: {
        subCategory: "jogger",
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
      <section className="womenBestOfBewakoof">
        <h5>BEST OF BEWAKOOF</h5>
        <div className="womenBestOfBewakoofContainer">
          {womenBestOfBewakoofImages.map((data, index) => (
            <div key={index} className="womenBestOfBewakoofBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="womenBestOfBewakoofImage"
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
