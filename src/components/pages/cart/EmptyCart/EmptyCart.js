import React from "react";
import EmptyCartImage from "./empty-cart-page-doodle.png";
import { Link } from "react-router-dom";
import Payments from "./secure-payments-image.webp";
import "./EmptyCart.css";

export const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <div className="emptyCartContainer">
        <img className="emptyCartImage" src={EmptyCartImage} alt="Empty Cart" />
        <p className="emptyCartText">Nothing in the bag</p>
        <Link to="/" className="emptyCartButton">
          Continue Shopping
        </Link>
        {/* <hr className="emptyCartDividerLine"></hr> */}
      </div>

      {/* <div>
        <p>You could try one of these categories:</p>

        <div>
          <div>
            <div>Men</div>
            <div>
              <div>Topwear</div>
              <div>Bottomwear</div>
            </div>
            <div>
              <div>Bestsellers</div>
            </div>
          </div>
          <div>
            <div>Women </div>
            <div>
              <div>Topwear</div>
              <div>Bottomwear</div>
            </div>
            <div>
              <div>Bestsellers</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="cartProductPaymentImageBox">
        <img
          className="cartProductPaymentImage"
          src={Payments}
          alt="Secured Payments"
        />
      </div>
    </div>
  );
};
