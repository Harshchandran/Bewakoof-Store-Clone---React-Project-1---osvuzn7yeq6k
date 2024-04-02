import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmptyOrderHistory } from "../emptyOrderHistory/EmptyOrderHistory";
import "./IndividualOrderCard.css";
import { LoaderPage } from "../../pageLoader/LoaderPage";

export const IndividualOrderCard = () => {
  const location = useLocation();
  const productID = location.state ? location.state.id : null;

  const Navigate = useNavigate();

  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [orderProductDetails, setOrderProductDetails] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserName(userData.name);
    }

    if (localStorage.getItem("token") && productID) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);

      const ProductDetailApi = `https://academics.newtonschool.co/api/v1/ecommerce/order/${productID}`;
      const projectId = "f104bi07c490";

      try {
        async function getOrderSingleProductDetails(api) {
          const response = await fetch(api, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${JWTToken}`,
              projectId: projectId,
            },
          });

          const data = await response.json();
          setLoader(false);
          console.log(data.data);

          setOrderProductDetails(data.data);
        }

        getOrderSingleProductDetails(ProductDetailApi);
      } catch (error) {
        console.error("Error fetching Hero Banner categories:", error);
      }
    } else {
      Navigate("/login");
    }
  }, [productID]);

  //   if (!orderProductDetails || !orderProductDetails.items) {
  //     // Return a message or null if data is not available yet
  //     return <p>No order details available</p>;
  //   }
  return (
    <>
      <section>
        {token ? (
          <div className="OrderStatusProductIndividualContainer">
            <LoaderPage loader={loader} />
            <div className="OrderStatusProductContainer">
              <div className="OrderStatusProductIndividualDetails">
                <p className="orderStatusProductTime">
                  <span>ORDER PLACED</span> {orderProductDetails.orderDate}
                </p>
              </div>
              {orderProductDetails?.items?.map((order, index) => (
                <div key={index} className="orderStatusProductDetailsBox">
                  <div className="orderStatusProductImageBox">
                    <Link
                      to={`/productCard/${order.product._id}`}
                      state={{ id: order.product._id }}
                    >
                      <img
                        className="orderStatusProductImage"
                        src={order.product.displayImage}
                        alt={order.product.name}
                      />
                    </Link>
                  </div>
                  <div className="orderStatusProductDetails">
                    <p className="orderStatusProductStatus">
                      {orderProductDetails.status}
                    </p>
                    <p className="orderStatusProductName">
                      {order.product.name}
                    </p>
                    <p className="orderStatusProductSize">Size: {order.size}</p>
                    <p className="orderStatusProductPrice">
                      Rs. {order.product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {orderProductDetails?.items?.map((order, index) => (
                <div key={index} className="orderProductShipmentDetailsBox">
                  <h4 className="orderProductShipmentStatus">
                    {" "}
                    {orderProductDetails.shipmentDetails.type}
                  </h4>
                  <p className="orderProductShipmentUserName">{userName}</p>
                  <p className="orderProductShipmentAddress">
                    Address:{" "}
                    {orderProductDetails.shipmentDetails.address.street},{" "}
                    {orderProductDetails.shipmentDetails.address.city},{" "}
                    {orderProductDetails.shipmentDetails.address.zipCode},{" "}
                    {orderProductDetails.shipmentDetails.address.state},{" "}
                    {orderProductDetails.shipmentDetails.address.country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <EmptyOrderHistory />
        )}
      </section>
    </>
  );
};
