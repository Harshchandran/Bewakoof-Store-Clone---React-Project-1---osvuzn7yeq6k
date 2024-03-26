import React, { useEffect, useState } from "react";
import "./IndividualCategoryProducts.css";
import { FiltersSection } from "./FiltersSection";
import { SortBy } from "./SortBy";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

export const IndividualCategoryProducts = () => {
  const [categoryData, setCategoryData] = useState([]);

  const location = useLocation();
  const category = location.state ? location.state.category : null;

  // if (category === "bestSellers") {
  //   useEffect(() => {
  //     const BestSellerApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={"rating":-1}`;

  //     const projectId = "f105bi07c590";

  //     async function getBestSellersSelection(api) {
  //       try {
  //         const response = await fetch(api, {
  //           method: "GET",
  //           headers: {
  //             projectId: projectId,
  //           },
  //         });

  //         const data = await response.json();

  //         console.log(data);
  //         setCategoryData(data.data);

  //         console.log(categoryData);
  //       } catch (error) {
  //         console.error("Error fetching Best Sellers Selection:", error);
  //       }
  //     }

  //     console.log(categoryData);
  //     console.log(categoryData.length);

  //     getBestSellersSelection(BestSellerApi);
  //   }, []);
  // }

  useEffect(() => {
    if (category) {
      const categoryDataApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?filter={"subCategory":"${category}"}`;

      const projectId = "f104bi07c490";

      async function getCategoryData(api) {
        try {
          const response = await fetch(api, {
            method: "GET",
            headers: {
              projectId: projectId,
            },
          });

          const data = await response.json();

          setCategoryData(data.data);
        } catch (error) {
          console.error("Error fetching Best Sellers Selection:", error);
        }
      }

      getCategoryData(categoryDataApi);
    }
  }, [category]);

  return (
    <>
      <h5>IndividualCategoryProducts</h5>

      <section className="individualCategorySection">
        <h5>{category}</h5>
        <div className="individualCategoryContainer">
          <div className="individualCategoryLeftContainer">
            <h6>FILTERS</h6>
            <FiltersSection />
          </div>
          <div className="individualCategoryRightContainer">
            <div className="individualCategorySortingBox">
              <SortBy />
            </div>
            <div className="individualCategoryDataContainer01">
              {categoryData.map((data, index) => (
                <Link
                  to="/productCard"
                  className="individualCategoryDataBox03"
                  key={index}
                  state={{ id: data._id }}
                >
                  <div className="individualCategoryDataBox02" key={index}>
                    <img
                      className="individualCategorySingleProductImage"
                      src={data.displayImage}
                      alt={`Image ${index}`}
                    />
                    <div className="individualCategorySingleProductBox">
                      <div className="individualCategorySingleProductDetail">
                        <p className="individualCategorySingleProductSellerName">
                          {data.seller.name}
                        </p>
                        <p className="individualCategorySingleProductProductName">
                          {data.name}
                        </p>
                      </div>
                      <div className="individualCategorySingleProductProductFavIconBox">
                        <FavoriteBorderRoundedIcon />
                      </div>
                    </div>
                    <div className="individualCategorySingleProductPrice">
                      <CurrencyRupeeSharpIcon sx={{ fontSize: "0.675rem" }} />
                      <p>{data.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
