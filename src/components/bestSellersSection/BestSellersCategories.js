import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import React, { useEffect, useState } from "react";
import "../bestSellersSection/BestSellersCategories.css";
import { Link } from "react-router-dom";
import { LoaderPage } from "../pages/pageLoader/LoaderPage";

export const BestSellersCategories = () => {
  const [bestSellersData, setBestSellersData] = useState([]);
  const [activeBestsellerImage, setActiveBestsellerImage] = useState(0);
  const [loader, setLoader] = useState(true);

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
        setLoader(false);
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
      <LoaderPage loader={loader} />
      <section className="bestSellersSection">
        <div className="bestSellerHeadingTag">BESTSELLERS</div>
        <div className="bestSellersContainer">
          <ArrowBackIosNewIcon
            className="previousImageBestSeller"
            onClick={prevSlide}
            sx={{ fontSize: "1rem", fontWeight: "200" }}
          />

          {bestSellersData
            .slice(activeBestsellerImage, activeBestsellerImage + 5)
            .map((data, index) => (
              <Link
                to={`/productCard/${data._id}`}
                key={index}
                className="bestSellersIndividualBox"
                state={{ id: data._id }}
              >
                <div key={data._id}>
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
              </Link>
            ))}

          <ArrowForwardIosIcon
            className="nextImageBestSeller"
            onClick={nextSlide}
            sx={{ fontSize: "1rem", fontWeight: "200" }}
          />
        </div>

        <div>
          <Link
            to="/productPage"
            state={{ filter: { sellerTag: "best seller" } }}
          >
            <button className="exploreMoreButton">Explore All </button>
          </Link>
        </div>
      </section>
    </>
  );
};
