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
      filter: {
        sellerTag: "best seller",
      },
      type: "Bestsellers",
    },
    {
      url: CategoryImage2,
      filter: {
        sellerTag: "new arrival",
      },
      type: "New Arrivals",
    },
    {
      url: CategoryImage3,
      filter: {
        size: "XXL",
      },
      type: "Plus Size",
    },
    {
      url: CategoryImage4,
      filter: {
        subCategory: "sweater",
      },
      type: "Sweaters",
    },
    {
      url: CategoryImage5,
      filter: {
        sellerTag: "trending",
      },
      type: "Trending",
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
                state={{ filter: data.filter }}
              >
                <img
                  className="homePageSubCategoryImage"
                  src={data.url}
                  alt={`hero${index}`}
                />
                <p className="homePageCategoryName">{data.type}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
