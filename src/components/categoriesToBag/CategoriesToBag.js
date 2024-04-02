import React from "react";
import { Link } from "react-router-dom";
import "../categoriesToBag/CategoriesToBag.css";
import Pajamas from "../categoriesToBag/Pajamas-category-pajamas-1.webp";
import Shorts from "../categoriesToBag/category-box-new-240x350-men-shorts-9.jpg";
import Hoodies from "../categoriesToBag/trending-category-icons-Hoodies-and-Sweatshirts-6.jpg";
import Joggers from "../categoriesToBag/trending-category-icons-Joggers-Women-8.jpg";
import Jeans from "../categoriesToBag/trending-category-jeans-2.webp";
import Shirts from "../categoriesToBag/trending-category-shirts-3.webp";
export const CategoriesToBag = () => {
  const categoriesToBagData = [
    {
      imageUrl: Hoodies,
      filter: {
        subCategory: "hoodie",
      },
    },
    {
      imageUrl: Pajamas,
      filter: {
        subCategory: "pyjamas",
      },
    },
    {
      imageUrl: Jeans,
      filter: {
        subCategory: "jeans",
      },
    },
    {
      imageUrl: Joggers,
      filter: {
        subCategory: "jogger",
      },
    },
    {
      imageUrl: Shorts,
      filter: {
        subCategory: "shorts",
      },
    },
    {
      imageUrl: Shirts,
      filter: {
        subCategory: "shirt",
      },
    },
  ];

  return (
    <>
      <section className="categoriesToBagSection">
        <h4 className="categoriesToBagTitle">CATEGORIES TO BAG</h4>
        <div className="categoriesToBagContainer">
          {categoriesToBagData.map((data, index) => (
            <div className="individualCategoryToBag" key={index}>
              <Link
                to="/productPage"
                key={index}
                state={{ filter: data.filter }}
              >
                <img
                  className="CategoryToBagImage"
                  src={data.imageUrl}
                  alt={data.category}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
