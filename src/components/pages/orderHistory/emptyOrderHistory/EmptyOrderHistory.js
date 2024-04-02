import React from "react";
import "./EmptyOrderHistory.css";
import NoOrders from "./no-orders.png";
import { Link } from "react-router-dom";

export const EmptyOrderHistory = () => {
  return (
    <>
      <div className="emptyOrderHistory">
        <div className="emptyOrderHistoryContainer">
          <p className="emptyOrderHistoryText">
            Sadly, you haven't placed any orders till now.
          </p>
          <img
            className="emptyOrderHistoryImage"
            src={NoOrders}
            alt="No Orders"
          />
          <Link to="/" className="emptyOrderHistoryButton">
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};
