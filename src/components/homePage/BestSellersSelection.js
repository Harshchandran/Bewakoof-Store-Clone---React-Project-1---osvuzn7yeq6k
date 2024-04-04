import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import React, { useEffect, useState } from "react";
import "../homePage/BestSellersSelection.css";

export const BestSellersSelection = () => {
  const [bestSellersData, setBestSellersData] = useState([]);

  const [favoriteIcon, setFavoriteIcon] = useState(false);

  const Rating = -1;

  useEffect(() => {
    const Api = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={"rating":${Rating}}`;
    const projectId = "f104bi07c490";

    try {
      async function getBestSellersSelectionData(api) {
        const response = await fetch(api, {
          method: "GET",
          headers: {
            projectId: projectId,
          },
        });

        const data = await response.json();

        setBestSellersData(data.data);
      }

      getBestSellersSelectionData(Api);
    } catch (error) {
      console.error("Error fetching Best Sellers Selection:", error);
    }
  }, []);

  const handleFavoriteIconClick = () => {
    setFavoriteIcon(!favoriteIcon);
  };

  return (
    <>
      <div>BestSellersSelection</div>

      <section className="bestSellersSection">
        {bestSellersData.map((sellersData, index) => (
          <div className="sellerDataCard" key={index}>
            <img src={sellersData.displayImage} className="sellerDataImg" />
            <div className="sellerDetailsBox">
              <div className="sellersDetails">
                <h5 className="sellerName">{sellersData.seller.name}</h5>
                <p className="sellerproductDetails"> {sellersData.name}</p>
              </div>

              <div className="sellersFavoriteIcon">
                {favoriteIcon === true ? (
                  <FavoriteRoundedIcon
                    sx={{ color: "red" }}
                    onClick={handleFavoriteIconClick}
                  />
                ) : (
                  <FavoriteBorderRoundedIcon
                    sx={{ color: "rgb(0, 0, 0, 0.5)" }}
                    onClick={handleFavoriteIconClick}
                  />
                )}
              </div>
            </div>
            <p className="productPrice">₹{sellersData.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};
