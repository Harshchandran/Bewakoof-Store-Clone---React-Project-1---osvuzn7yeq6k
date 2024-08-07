import React from "react";
import Pajamas from "./1x1-hc-pajama-men--1--1709216825.webp";
import Joggers from "./FEB-1x1-SummerVests--2--1710243686.webp";
import TShirt from "./Classic-Fit-Tshirt-Men-IK-1x1--4--1709219671.webp";
import { Link } from "react-router-dom";
import "./MenBestOfBewakoof.css";

export const MenBestOfBewakoof = () => {
  const menMiniSubNavigationImages = [
    {
      url: Pajamas,
      filter: {
        subCategory: "pyjamas",
        gender: "Men",
      },
    },
    {
      url: Joggers,
      filter: {
        subCategory: "tracksuit",
        gender: "Men",
      },
    },
    {
      url: TShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Men",
      },
    },
  ];

  return (
    <>
      <section className="menBestOfBewakoof">
        <h4>BEST OF BEWAKOOF</h4>
        <div className="menBestOfBewakoofContainer">
          {menMiniSubNavigationImages.map((data, index) => (
            <div key={index} className="menBestOfBewakoofBox">
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="menBestOfBewakoofImage"
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
