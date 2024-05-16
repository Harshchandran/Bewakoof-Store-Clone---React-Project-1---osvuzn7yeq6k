import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import { EmptyWishList } from "./emptyWishlist/EmptyWishList";

export default function Wishlist() {
  const [token, setToken] = useState("");

  const [wishlistItemsData, setWishlistItemsData] = useState([]);

  const GetWishlistItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/wishlist";
  const projectId = "f105bi07c590";

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

      console.log(data);

      localStorage.setItem("wishlistItemsNumber", JSON.stringify(data.results));

      setWishlistItemsData(data.data);
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
  return (
    <>
      <section>
        {token ? (
          <div>
            <div>Wishlist</div>
          </div>
        ) : (
          <EmptyWishList />
        )}
      </section>
    </>
  );
}
