import React from "react";
import { Link } from "react-router-dom";
import Hoodies from "../trendingCategories/3rd-Jan-2024--1--4.jpg";
import PajamasMen from "../trendingCategories/Pajamas-category-Pajamas-4.webp";
import PajamasWomen from "../trendingCategories/Pajamas-category-pajamas-1.webp";
import "../trendingCategories/TrendingCategories.css";
import OverSizedTShirt from "../trendingCategories/category-box-Oversized-tshirts-Women-11.jpeg";
import Shorts from "../trendingCategories/category-box-new-240x350-men-shorts-9.jpg";
import Dresses from "../trendingCategories/category-box-new-D-240x350-WOMEN-Dresses-160.jpg";
import SweatersWomen from "../trendingCategories/trending-category-Sweaters-Women-1.jpg";
import HoodiesMen from "../trendingCategories/trending-category-icons-Hoodies-and-Sweatshirts-6.jpg";
import JeansMen from "../trendingCategories/trending-category-icons-Jeans-2.jpg";
import JeansWomen from "../trendingCategories/trending-category-icons-Jeans-Women-3.jpg";
import Joggers from "../trendingCategories/trending-category-icons-Joggers-Women-8.jpg";
import Sweaters from "../trendingCategories/trending-category-icons-Sweaters-5.jpg";
import shirts from "../trendingCategories/trending-category-shirts-3.webp";

export const TrendingCategories = () => {
  const CategoryData = [
    {
      url: HoodiesMen,
      filter: {
        subCategory: "hoodie",
        gender: "Men",
      },
    },
    {
      url: JeansMen,
      filter: {
        subCategory: "jeans",
        gender: "Men",
      },
    },
    {
      url: Joggers,
      filter: {
        subCategory: "jogger",
        gender: "Men",
      },
    },
    {
      url: shirts,
      filter: {
        subCategory: "shirt",
        gender: "Men",
      },
    },
    {
      url: Sweaters,
      filter: {
        subCategory: "sweater",
        gender: "Men",
      },
    },
    {
      url: PajamasMen,
      filter: {
        subCategory: "pyjamas",
        gender: "Men",
      },
    },

    {
      url: Hoodies,
      filter: {
        subCategory: "shirt",
        gender: "Women",
      },
    },
    {
      url: JeansWomen,
      filter: {
        subCategory: "jeans",
        gender: "Women",
      },
    },
    {
      url: Dresses,
      filter: {
        subCategory: "kurti",
      },
    },
    {
      url: OverSizedTShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Women",
        size: "XXL",
      },
    },
    {
      url: SweatersWomen,
      filter: {
        subCategory: "jumpsuit",
        gender: "Women",
      },
    },
    {
      url: PajamasWomen,
      filter: {
        subCategory: "jogger",
        gender: "Women",
      },
    },
  ];

  return (
    <>
      <section>
        <div className="trendingCategoryText">TRENDING CATEGORIES</div>
        <div className="trendingCategoryContainer">
          <div className="trendingCategoryBox">
            {CategoryData.slice(0, 6).map((data, index) => (
              <Link
                to="/productPage"
                className="trendingCategory"
                key={index}
                state={{ filter: data.filter }}
              >
                <div>
                  <img
                    className="trendingCategoryImage"
                    src={data.url}
                    alt={data.category}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="trendingCategoryBox">
            {CategoryData.slice(6, 12).map((data, index) => (
              <Link
                to="/productPage"
                className="trendingCategory"
                key={index}
                state={{ filter: data.filter }}
              >
                <div>
                  <img
                    className="trendingCategoryImage"
                    src={data.url}
                    alt={data.category}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
