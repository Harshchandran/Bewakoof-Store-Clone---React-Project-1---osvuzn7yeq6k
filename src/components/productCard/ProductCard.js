import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../productCard/ProductCard.css";
import { ProductDetails } from "./ProductDetails";
import { LoaderPage } from "../pages/pageLoader/LoaderPage";

export const ProductCard = ({ updateCartItemNumber }) => {
  const location = useLocation();

  const productID = location.state ? location.state.id : null;

  const [productDetails, setProductDetails] = useState([]);
  const [productReview, setProductReview] = useState([]);

  const [loader, setLoader] = useState(true);

  const [mainImage, setMainImage] = useState(productDetails?.displayImage);

  useEffect(() => {
    if (productID) {
      const ProductDetailApi = `https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`;
      const projectId = "f104bi07c490";

      try {
        async function getProductDetails(api) {
          const response = await fetch(api, {
            method: "GET",
            headers: {
              projectId: projectId,
            },
          });

          const data = await response.json();
          setLoader(false);
          setProductDetails(data.data);
        }

        getProductDetails(ProductDetailApi);
      } catch (error) {
        console.error("Error fetching Hero Banner categories:", error);
      }
    }
  }, [productID]);

  useEffect(() => {
    const ProductReviewApi = `https://academics.newtonschool.co/api/v1/ecommerce/review/${productID}`;
    const projectId = "f104bi07c490";

    try {
      async function getProductReview(api) {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            projectId: projectId,
          },
        });

        const data = await response.json();
        setLoader(false);
        setProductReview(data.data);
      }

      getProductReview(ProductReviewApi);
    } catch (error) {
      console.error("Error fetching Hero Banner categories:", error);
    }
  }, [productID]);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <>
      <section className="productCart">
        <LoaderPage loader={loader} />
        <div key={productDetails?._id} className="productCardContainer">
          <div className="cardProductImagesContainer">
            <div className="cardProductImagesBox">
              {productDetails?.images?.map((data, index) => (
                <div key={index} onClick={() => handleImageClick(data)}>
                  <img className="cardProductImages" src={data} alt={data} />
                </div>
              ))}
            </div>

            <div className="cardProductMainImageBox">
              <img
                className="cardProductMainImage"
                src={mainImage || productDetails?.displayImage}
                alt={productDetails?.title}
              />
            </div>
          </div>

          <div className="cardProductDetailsContainer">
            <ProductDetails
              productDetails={productDetails}
              productReview={productReview}
              updateCartItemNumber={updateCartItemNumber}
            />
          </div>
        </div>
      </section>
    </>
  );
};
