import React from "react";
import "./Wishlist.css";
import WishListEmpty from "./wishlistEmpty.svg";

export default function Wishlist() {
  return (
    <>
      <div>Wishlist</div>

      <div>
        <img src={WishListEmpty} alt="Empty Wishlist" />
        <p>
          Hey! Your wishlist is empty. Save your favourites here and make them
          yours soon!
        </p>
        <button>SHOP NOW</button>
      </div>
    </>
  );
}
