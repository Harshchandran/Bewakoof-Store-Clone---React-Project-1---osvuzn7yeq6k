import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import React, { useEffect, useState } from "react";
import "../bestSellersSection/BestSellersCategories.css";
import { Link } from "react-router-dom";

export const BestSellersCategories = () => {
  const [bestSellersData, setBestSellersData] = useState([]);
  const [activeBestsellerImage, setActiveBestsellerImage] = useState(0);

  useEffect(() => {
    const BestSellerApi = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={"rating":-1}`;

    const projectId = "f105bi07c590";

    async function getBestSellersSelection(api) {
      try {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            projectId: projectId,
          },
        });

        const data = await response.json();

        setBestSellersData(data.data);
      } catch (error) {
        console.error("Error fetching Best Sellers Selection:", error);
      }
    }

    getBestSellersSelection(BestSellerApi);
  }, []);

  const prevSlide = () => {
    setActiveBestsellerImage((prevIndex) =>
      prevIndex === 0 ? bestSellersData.length - 5 : prevIndex - 5
    );
  };

  const nextSlide = () => {
    setActiveBestsellerImage((prevIndex) =>
      prevIndex + 5 >= bestSellersData.length ? 0 : prevIndex + 5
    );
  };

  useEffect(() => {
    const delayStateUpdate = setTimeout(() => {}, 0);

    return () => clearTimeout(delayStateUpdate);
  }, [activeBestsellerImage]);

  return (
    <>
      <div>BestSellersCategories</div>
      <section className="bestSellersSection">
        <h4>BESTSELLERS</h4>

        <div className="bestSellersContainer">
          {/* <ArrowBackIosNewIcon
            className="previousImageBestSeller"
            onClick={prevSlide}
            sx={{ fontSize: "2rem", fontWeight: "200" }}
          /> */}

          {bestSellersData
            .slice(activeBestsellerImage, activeBestsellerImage + 5)
            .map((data, index) => (
              <div key={data._id} className="bestSellersIndividualBox">
                <img
                  className="bestSellersImage"
                  src={data.displayImage}
                  alt={`hero${index}`}
                />
                <div className="bestSellersNameContainer">
                  <div className="bestSellerNameBox">
                    <h5>{data.seller.name}</h5>
                    <p className="bestSellerName">{data.name}</p>
                  </div>
                  <div>
                    <FavoriteBorderRoundedIcon
                      style={{ fontSize: "calc(0.5vw + 0.5vh + 1vmin)" }}
                    />
                  </div>
                </div>
                <p className="bestSellersPriceTag">
                  <CurrencyRupeeSharpIcon
                    style={{ fontSize: "calc(0.1vw + 0.1vh + 1vmin)" }}
                  />
                  {data.price}
                </p>
              </div>
            ))}

          {/* <ArrowForwardIosIcon
            className="nextImageBestSeller"
            onClick={nextSlide}
            sx={{ fontSize: "2rem", fontWeight: "200" }}
          /> */}
        </div>

        <div>
          <Link to="/productPage" state={{ category: "bestSellers" }}>
            Explore All
          </Link>
          <h4>Explore All</h4>
        </div>
      </section>
    </>
  );
};
