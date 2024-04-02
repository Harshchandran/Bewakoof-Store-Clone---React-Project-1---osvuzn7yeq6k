import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderHistory.css";

import { EmptyOrderHistory } from "./emptyOrderHistory/EmptyOrderHistory";

export const OrderHistory = () => {
  const [token, setToken] = useState("");

  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [orderHistoryItems, setOrderHistoryItems] = useState([]);

  const GetOrderHistoryURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/order/";
  const projectId = "f105bi07c590";

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);
      const getOrderHistory = async () => {
        try {
          const response = await fetch(GetOrderHistoryURL, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${JWTToken}`,
              projectId: projectId,
            },
          });

          const data = await response.json();

          setOrderHistoryData(data.data);

          setOrderHistoryItems(data.order);
        } catch (error) {
          console.error("Error fetching Cart Items:", error);
        }
      };

      getOrderHistory();
    }
  }, []);

  return (
    <>
      <div>
        <h2 className="OrderHistoryHeading">My Orders</h2>

        {token ? (
          orderHistoryData.results === 0 ? (
            <EmptyOrderHistory />
          ) : (
            <section>
              <div>
                <div className="OrderHistoryProductContainer">
                  {orderHistoryData.map((order, index) => (
                    <div
                      key={index}
                      className="individualOrderProductHistoryBox"
                    >
                      {order.order.items.length > 0 && (
                        <div className="individualOrderProductHistoryProductDetailsBox">
                          <div className="individualOrderProductHistoryProductImageBox">
                            <Link
                              to={`/productCard/${order.order.items[0].product._id}`}
                              state={{ id: order.order.items[0].product._id }}
                            >
                              <img
                                className="individualOrderProductHistoryProductImage"
                                src={order.order.items[0].product.displayImage}
                                alt={order.order.items[0].product.name}
                              />
                            </Link>
                          </div>
                          <div className="individualOrderProductHistoryProductDetails">
                            <p className="individualOrderProductHistoryProductName">
                              {order.order.items[0].product.name}
                            </p>

                            <p className="individualOrderProductHistoryProductPrice">
                              ₹ {""}
                              {order.order.items[0].product.price}
                            </p>

                            <div className="individualOrderProductHistoryOrderInformationButtonBox">
                              <Link
                                to="/orders/Individual"
                                key={index}
                                state={{ id: order.order._id }}
                                _id
                              >
                                <button className="individualOrderProductHistoryOrderInformationButton">
                                  Order Info
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        ) : (
          <EmptyOrderHistory />
        )}
      </div>
    </>
  );
};
