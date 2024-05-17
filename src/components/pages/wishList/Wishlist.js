import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { EmptyWishList } from "./emptyWishlist/EmptyWishList";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

export default function Wishlist({ updateCartItemNumber }) {
  const [token, setToken] = useState("");

  const [wishlistItemsData, setWishlistItemsData] = useState([]);

  const [updateSize, setUpdateSize] = useState("");

  const [AddingItemToCart, setAddingItemToCart] = useState({
    quantity: 1,
    size: "M",
  });

  const GetWishlistItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";
  const projectId = "f104bi07c490";

  const getWishlistProducts = async () => {
    const JWTToken = JSON.parse(localStorage.getItem("token"));
    setToken(JWTToken);
    try {
      const response = await fetch(GetWishlistItemsURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JWTToken}`,
          projectId: projectId,
        },
      });

      const data = await response.json();

      localStorage.setItem("wishlistItemsNumber", JSON.stringify(data.results));

      setWishlistItemsData(data.data.items);
    } catch (error) {
      console.error("Error fetching Cart Items:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);

      getWishlistProducts();
    }
  }, [projectId]);

  const updateItemToCart = async (SingleProductId) => {
    const UpdateCartItemsApi = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${SingleProductId}`;
    if (token) {
      try {
        const response = await fetch(UpdateCartItemsApi, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            projectId: projectId,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(AddingItemToCart),
        });

        const data = await response.json();

        setUpdateSize("");

        getCartProducts();
        removeProductFromWishList(SingleProductId);
      } catch (error) {
        console.error("Error updating item to cart:", error);
      }
    }
  };

  const GetCartItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/cart";

  const getCartProducts = async () => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));

      try {
        const response = await fetch(GetCartItemsURL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${JWTToken}`,
            projectId: projectId,
          },
        });

        const data = await response.json();

        localStorage.setItem(
          "cartItemsNumber",
          JSON.stringify(data.data.items.length)
        );

        updateCartItemNumber();
      } catch (error) {
        console.error("Error fetching Cart Items:", error);
      }
    }
  };

  const removeProductFromWishList = async (productId) => {
    const removeWishlistApi = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${productId}`;
    const projectId = "f104bi07c490";

    if (token) {
      try {
        const response = await fetch(removeWishlistApi, {
          method: "DELETE",
          headers: {
            projectId: projectId,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        getWishlistProducts();
      } catch (error) {
        console.error(
          "Error occurred while Removing product the wishlist:",
          error
        );
      }
    }
  };

  const clearWishlistData = async () => {
    const ClearWishlistApi = `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`;
    const projectId = "f104bi07c490";

    if (token) {
      try {
        const response = await fetch(ClearWishlistApi, {
          method: "DELETE",
          headers: {
            projectId: projectId,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        getWishlistProducts();
      } catch (error) {
        console.error(
          "Error occurred while Removing product the wishlist:",
          error
        );
      }
    }
  };

  return (
    <>
      <section>
        {token ? (
          wishlistItemsData.length > 0 ? (
            <section className="wishlistSection">
              <div className="wishlistContainer">
                {wishlistItemsData?.map((item) => (
                  <div
                    key={item?.products?._id}
                    className="individualWishlistCard"
                  >
                    <HighlightOffRoundedIcon
                      className="wishlistCardRemoveIcon"
                      sx={{
                        color: "#5d5d5d",
                        background: "#ffff",
                        borderRadius: "100%",
                      }}
                      onClick={() => {
                        removeProductFromWishList(item?.products?._id);
                      }}
                    />
                    <div className="wishlistImageBox">
                      <img
                        className="wishlistImage"
                        src={item?.products?.displayImage}
                        alt={item?.products?.name}
                      />
                    </div>
                    <div className="wishlistTextBox">
                      <div className="wishlistBrandName">Bewakoof® </div>
                      <div className="wishlistProductName">
                        {item?.products?.name}
                      </div>
                      <div className="wishlistProductPrice">
                        ₹ {item?.products?.price}
                      </div>
                    </div>
                    <div className="wishlistProductRating">
                      {item?.products?.ratings?.toFixed(1)}{" "}
                      <StarIcon sx={{ color: "#ffc700", width: "0.8rem" }} />
                    </div>
                    <hr
                      style={{
                        border: "none",
                        background: " rgb(0, 0, 0, 0.2)",
                        height: "0.1rem",
                      }}
                    ></hr>
                    <div
                      className="wishlistProductAddToCart"
                      onClick={() => {
                        updateItemToCart(item?.products?._id);
                      }}
                    >
                      <ShoppingBagOutlinedIcon sx={{ color: "#207bb4" }} />
                      ADD TO BAG
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="clearAllWishlistButton"
                onClick={() => {
                  clearWishlistData();
                }}
              >
                Clear Wishlist
              </button>
            </section>
          ) : (
            <EmptyWishList />
          )
        ) : (
          <EmptyWishList />
        )}
      </section>
    </>
  );
}
