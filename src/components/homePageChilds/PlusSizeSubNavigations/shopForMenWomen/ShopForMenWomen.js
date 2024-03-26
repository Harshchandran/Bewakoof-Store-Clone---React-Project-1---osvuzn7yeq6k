import React from "react";
import { Link } from "react-router-dom";
import TShirtMen from "./Plus-Size-Category-Icon-180x320-Oversized-T-shirts-1707473689.webp";
import TShirtMenLoose from "./Plus-Size-Category-Icon-180x320-Super-loose-t-shirts-1707473690.webp";
import TShirtMenFit from "./Plus-Size-Category-Icon-180x320-Classic-fit-t-shirts-1707473689.webp";
import ShortsMen from "./Plus-Size-Category-Icon-180x320-Shorts-1707473690.webp";
import PajamasMen from "./Plus-Size-Category-Icon-Pajamas-men--1--1703743386.jpg";
import ShirtMen from "./Plus-Size-Category-Icon-Shirts-Men-1701934988.webp";

import TShirtWomen from "./Plus-Size-Category-Icon-180x320-Oversized-T-Shirts-Women-1707812367.webp";
import BoyFriendTShirt from "./Plus-Size-Category-Icon-180x320-Boyfriend-T-Shirts-Women-1707812367.webp";
import PantsWomen from "./Plus-Size-Category-Icon-180x320-CasualPants-Women-1709727131.jpg";
import JoggersWomen from "./Plus-Size-Category-Icon-Joggers-Women-1701932317-1707475708.webp";
import TopWearWomen from "./Plus-Size-Category-Icon-Topwear-Women-1701932318.webp";
import DressesWomen from "./Plus-Size-Category-Icon-Dresses-Women-1701932318.webp";

import ShopForMen from "./PlusSize-Refresh-desktop-slice-shop-for-men-1689250954.webp";
import ShopForWomen from "./PlusSize-Refresh-desktop-slice-shop-for-women-1689251012.webp";

import "./ShopForMenWomen.css";

export const ShopForMenWomen = () => {
  const ShopForMenImages = [
    {
      url: TShirtMen,
      category: "tshirt",
    },
    {
      url: PajamasMen,
      category: "pyjamas",
    },
    {
      url: TShirtMenLoose,
      category: "tshirt",
    },
    {
      url: ShortsMen,
      category: "shorts",
    },
    {
      url: TShirtMenFit,
      category: "tshirt",
    },
    {
      url: ShirtMen,
      category: "shirt",
    },
  ];

  const ShopForWomenImages = [
    {
      url: TShirtWomen,
      category: "tshirt",
    },
    {
      url: PantsWomen,
      category: "trouser",
    },
    {
      url: BoyFriendTShirt,
      category: "tshirt",
    },
    {
      url: JoggersWomen,
      category: "jogger",
    },
    {
      url: TopWearWomen,
      category: "kurti",
    },
    {
      url: DressesWomen,
      category: "tshirt",
    },
  ];
  return (
    <>
      <section className="ShopForMenWomenCategory">
        <div>
          <img
            className="ShopForMenWomenSoloImage"
            src={ShopForMen}
            alt="ShopForMen"
          />
        </div>
        <div className="ShopForMenWomenImageContainer">
          {ShopForMenImages.map((data, index) => (
            <div key={index} className="ShopForMenWomenImageBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="ShopForMenWomenImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="ShopForMenWomenCategory">
        <div>
          <img
            className="ShopForMenWomenSoloImage"
            src={ShopForWomen}
            alt="ShopForWomen"
          />
        </div>
        <div className="ShopForMenWomenImageContainer">
          {ShopForWomenImages.map((data, index) => (
            <div key={index} className="ShopForMenWomenImageBox">
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="ShopForMenWomenImage"
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
