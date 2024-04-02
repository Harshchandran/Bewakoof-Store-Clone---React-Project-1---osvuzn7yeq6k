import React from "react";
import WishListEmpty from "./wishlistEmptyImage.svg";
import { Link } from "react-router-dom";
import "./EmptyWishList.css";

export const EmptyWishList = () => {
  return (
    <>
      <div className="emptyWishListContainer">
        <img src={WishListEmpty} alt="Empty Wishlist" />
        <h4 className="emptyWishListHeading">Hey! Your wishlist is empty.</h4>
        <p className="emptyWishListText">
          Save your favourites here and make them yours soon!
        </p>
        <Link to="/">
          <button className="emptyWishlistButton">SHOP NOW</button>
        </Link>
      </div>
    </>
  );
};
