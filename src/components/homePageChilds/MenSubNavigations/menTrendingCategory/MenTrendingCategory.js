import React from "react";
import { Link } from "react-router-dom";
import KurtasMen from "./Men-category-box-new-final-MEN-Kurtas-1657526328.jpg";
import TShirtMen from "./Men-trending-category-icons-240x350-Classic-Fit-T-Shirts--1--1707310328.webp";
import CasualPantsMen from "./Men-trending-category-icons-Casual-Pants-men--1706510069.webp";
import JeansMen from "./Men-trending-category-icons-Jeans-men--1706510068.webp";
import JoggersMen from "./Men-trending-category-icons-Joggers-men-1706510066.webp";
import ShirtsMen from "./Men-trending-category-icons-Shirts-men--1706510068.webp";
import ShortsMen from "./Men-unnamed--11--1707299887.jpg";
import PajamasMen from "./Men-unnamed--7--1706514971.webp";
import "./MenTrendingCategory.css";
import HoodiesMen from "./trending-category-icons-Hoodies-and-Sweatshirts-6.jpg";
import SweatersMen from "./trending-category-icons-Sweaters-5.jpg";

export const MenTrendingCategory = () => {
  const CategoryData = [
    {
      url: HoodiesMen,
      category: "hoodie",
    },
    {
      url: TShirtMen,
      category: "tshirt",
    },
    {
      url: JeansMen,
      category: "jeans",
    },
    {
      url: KurtasMen,
      category: "kurta",
    },
    {
      url: CasualPantsMen,
      category: "jumpsuit",
    },
    {
      url: ShirtsMen,
      category: "shirt",
    },
    {
      url: JoggersMen,
      category: "jogger",
    },
    {
      url: SweatersMen,
      category: "sweater",
    },
    {
      url: PajamasMen,
      category: "pajamas",
    },
    {
      url: ShortsMen,
      category: "shorts",
    },
  ];

  return (
    <>
      <section>
        <div className="menTrendingCategoryText">TrendingCategory</div>
        <div className="mensTrendingCategoryContainer">
          <div className="mensTrendingCategoryBox">
            {CategoryData.slice(0, 5).map((data, index) => (
              <Link
                to="/productPage"
                className="mensTrendingCategory"
                key={index}
                state={{ category: data.category }}
              >
                <div>
                  <img
                    className="mensTrendingCategoryImage"
                    src={data.url}
                    alt={data.category}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mensTrendingCategoryBox">
            {CategoryData.slice(5, 10).map((data, index) => (
              <Link
                to="/productPage"
                className="mensTrendingCategory"
                key={index}
                state={{ category: data.category }}
              >
                <div>
                  <img
                    className="mensTrendingCategoryImage"
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
