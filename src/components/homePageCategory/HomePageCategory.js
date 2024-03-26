import React from "react";
import { Link } from "react-router-dom";
import "../homePageCategory/HomePageCategory.css";
import CategoryImage1 from "../homePageCategory/category-icon1.gif";
import CategoryImage2 from "../homePageCategory/category-icon2.webp";
import CategoryImage3 from "../homePageCategory/category-icon3.webp";
import CategoryImage4 from "../homePageCategory/category-icon5.gif";
import CategoryImage5 from "../homePageCategory/category-icon4.jpg";

export const HomePageCategory = () => {
  const homePageMiniCategoryImages = [
    {
      url: CategoryImage1,
      category: "Bestsellers",
    },
    {
      url: CategoryImage2,
      category: "New Arrivals",
    },
    {
      url: CategoryImage3,
      category: "Plus Size",
    },
    {
      url: CategoryImage4,
      category: "Sweaters",
    },
    {
      url: CategoryImage5,
      category: "Trending",
    },
  ];
  return (
    <>
      <section className="homePageSubCategorySection">
        <div className="homePageSubCategoryContainer">
          {homePageMiniCategoryImages.map((data, index) => (
            <div key={index} className="homePageSubCategoryBox">
              <Link
                to="/productPage"
                key={index}
                state={{ category: data.category }}
              >
                <img
                  className="homePageSubCategoryImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="homePageCategoryName">{data.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
