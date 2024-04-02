import React from "react";
import "./HomeNavigation.css";
import { Link } from "react-router-dom";

export default function HomeNavigation() {
  return (
    <>
      <div className="homeNavigationContainer">
        <ul className="homeNavigationMenu">
          <li>
            <Link
              to="/productPage"
              state={{
                filter: {
                  sellerTag: "top rated",
                },
              }}
            >
              LIVE NOW
            </Link>
          </li>
          <li>
            <Link to="/campaign/mens-home">MEN</Link>
          </li>
          <li>
            <Link to="/campaign/womens-home">WOMEN</Link>
          </li>
          <li>
            <Link
              to="/productPage"
              state={{
                filter: {
                  sellerTag: "trending",
                },
              }}
            >
              BEWAKOOF AIR
            </Link>
          </li>
          <li>
            <Link to="/campaign/plus-size-store">PLUS SIZE</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
