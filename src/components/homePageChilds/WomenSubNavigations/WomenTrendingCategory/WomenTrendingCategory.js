import React from "react";
import { Link } from "react-router-dom";
import "./WomenTrendingCategory.css";
import HoodiesWomen from "./3rd-Jan-2024--1--4.jpg";
import CargosWomen from "./Women-3rd-Jan-2024-Cargos-1704270812.webp";
import SweatersWomen from "./trending-category-Sweaters-Women-1.jpg";
import PajamasWomen from "./Women-Pajamas-trending-category-icons-240x350-women-1706514429.webp";
import PlusSizeWomen from "./Women-3rd-Jan-2024-Oversized-T--shirts-1704270296.webp";
import JeansWomen from "./Women-trending-category-icons-Jeans-1706509182.webp";
import JoggersWomen from "./Women-trending-category-icons-Joggers-1706509180.webp";
import TShirtWomen from "./Women-Printed-tshirts-trending-category-icons-240x350-1706514428.webp";
import CasualPantsWomen from "./Women-trending-category-icons-Casual-Pants-1706509180.webp";
import JumpSuitsWomen from "./Women-trending-category-icons-240x350-Co-ords-1707280972.webp";

export const WomenTrendingCategory = () => {
  const CategoryData = [
    {
      url: HoodiesWomen,
      filter: {
        subCategory: "kurti",
      },
    },
    {
      url: CargosWomen,
      filter: {
        subCategory: "jumpsuit",
        gender: "Women",
      },
    },

    {
      url: TShirtWomen,
      filter: {
        subCategory: "tshirt",
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
      url: CasualPantsWomen,
      filter: {
        gender: "Women",
      },
    },
    {
      url: JumpSuitsWomen,
      filter: {
        subCategory: "jumpsuit",
        gender: "Women",
      },
    },
    {
      url: JoggersWomen,
      filter: {
        subCategory: "jogger",
        gender: "Women",
      },
    },
    {
      url: SweatersWomen,
      filter: {
        subCategory: "shirt",
        gender: "Women",
      },
    },
    {
      url: PajamasWomen,
      filter: {
        gender: "Women",
      },
    },
    {
      url: PlusSizeWomen,
      filter: {
        subCategory: "tshirt",
        gender: "Women",
        size: "XXL",
      },
    },
  ];
  return (
    <>
      <section>
        <div className="womenTrendingCategoryText">TRENDING CATEGORIES</div>
        <div className="womenTrendingCategoryContainer">
          <div className="womenTrendingCategoryBox">
            {CategoryData.slice(0, 5).map((data, index) => (
              <Link
                to="/productPage"
                className="womenTrendingCategory"
                key={index}
                state={{ filter: data.filter }}
              >
                <div>
                  <img
                    className="womenTrendingCategoryImage"
                    src={data.url}
                    alt={data.category}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="womenTrendingCategoryBox">
            {CategoryData.slice(5, 10).map((data, index) => (
              <Link
                to="/productPage"
                className="womenTrendingCategory"
                key={index}
                state={{ filter: data.filter }}
              >
                <div>
                  <img
                    className="womenTrendingCategoryImage"
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
