import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import "./Cart.css";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import RedTruck from "./Red-truck.webp";
import { AddressBlock } from "./address/AddressBlock";
import CartBadge from "./cart-badge-trust.svg";
import CartEasyReturn from "./cart-easy-return.svg";
import CartQuality from "./quality-check.svg";
import Payments from "./secure-payments-image.webp";
import Alert from "@mui/material/Alert";
import { LoaderPage } from "../pageLoader/LoaderPage";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Cart = ({ updateCartItemNumber }) => {
  const [loader, setLoader] = useState(true);

  const [token, setToken] = useState("");
  const [cartProducts, setCartProducts] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [productIds, setProductIds] = useState([]);

  const [productQuantities, setProductQuantities] = useState([]);

  const GetCartItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/cart";
  const projectId = "f105bi07c590";

  const getCartProducts = async () => {
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
      setCartProducts(data);

      localStorage.setItem("cartItemsNumber", JSON.stringify(data.results));
      setLoader(false);

      setCartItems(data.data.items);

      const ids = data.data.items.map((item) => item.product._id);

      setProductIds(ids);

      const quantities = data.data.items.map((item) => item.quantity);

      setProductQuantities(quantities);

      updateCartItemNumber();
    } catch (error) {
      console.error("Error fetching Cart Items:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);

      getCartProducts();
    }
  }, [projectId]);

  const [deleteItemResponse, setDeleteItemResponse] = useState([]);
  const [singleProductId, setProductId] = useState("");

  const DeleteItemFromCartUrl = async (productId) => {
    try {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      const deleteUrl = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`;

      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JWTToken}`,
          projectId: projectId,
          Accept: "*/*",
        },
      });
      const data = await response.json();
      setLoader(false);

      setDeleteItemResponse(data);
      getCartProducts();
      setLoader(true);
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const handleRemoveProductFromCart = (id) => {
    DeleteItemFromCartUrl(id);
    setLoader(true);
  };

  const [clearingCartResponse, setClearingCartResponse] = useState([]);

  const handleClearCart = async (productId) => {
    try {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      const ClearCartUrl = `https://academics.newtonschool.co/api/v1/ecommerce/cart/`;

      const response = await fetch(ClearCartUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JWTToken}`,
          projectId: projectId,
          Accept: "*/*",
        },
      });
      const data = await response.json();
      setLoader(false);
      setClearingCartResponse(data);

      getCartProducts();
      setLoader(true);

      // setCartItems((currentItems) =>
      //   currentItems.filter((item) => item._id !== productId)
      // );
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  const [ClearCartPopUpo, setClearCartPopUp] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCartClearClick = () => {
    setClearCartPopUp(true);
  };

  const handleCartClearClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setClearCartPopUp(false);
  };

  return (
    <>
      <LoaderPage loader={loader} />
      <section className="cart">
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{
                width: "100%",
                backgroundColor: "#ffd84d",
                color: "black",
                "& .MuiAlert-icon": {
                  display: "none",
                },
              }}
            >
              Product Successfully Removed from Cart..!
            </Alert>
          </Snackbar>
        </div>
        <div>
          <Snackbar
            open={ClearCartPopUpo}
            autoHideDuration={6000}
            onClose={handleCartClearClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              onClose={handleCartClearClose}
              severity="success"
              variant="filled"
              sx={{
                width: "100%",
                backgroundColor: "#ffd84d",
                color: "black",
                "& .MuiAlert-icon": {
                  display: "none",
                },
              }}
            >
              Cart Cleared Successfully..!
            </Alert>
          </Snackbar>
        </div>
        {token ? (
          cartProducts?.data?.totalPrice === 0 ||
          deleteItemResponse?.data?.totalPrice === 0 ||
          clearingCartResponse?.data?.totalPrice === 0 ? (
            <EmptyCart />
          ) : (
            <div className="cartProductAdded">
              <div className="cartProductAddedContainer">
                <div className="cartProductAddedLeftContainer">
                  <div>
                    <h4 className="productsInCart">
                      My Bag{" "}
                      <span>
                        {cartProducts.results} item{" "}
                        {cartProducts.results > 1 ? "(s)" : ""}
                      </span>
                    </h4>
                  </div>
                  <div className="freeDeliveryText">
                    <img
                      className="redTruckImage"
                      src={RedTruck}
                      alt="Red Truck"
                    />
                    <p>Yay! You get FREE delivery on this order</p>
                  </div>
                  <div className="cartProductsContainer">
                    {cartItems.map((item, index) => (
                      <div
                        className="singleCartProductsContainer"
                        key={item._id}
                      >
                        <div className="cartProductSingleDetails">
                          <div className="cartProductSingleItemDetails">
                            <p className="cartProductName">
                              {item.product.name}
                            </p>
                            <h5 className="cartProductPrice">
                              ₹{item.product.price}
                            </h5>
                            <div>
                              <Button
                                sx={{ color: "#000", fontSize: "0.75rem" }}
                              >
                                Qty : {"   "}
                                <span style={{ fontWeight: 900 }}>
                                  {item.quantity}
                                </span>{" "}
                              </Button>

                              <Button
                                sx={{ color: "#000", fontSize: "0.75rem" }}
                              >
                                SIZE :{"  "}
                                <span style={{ fontWeight: 900 }}>
                                  {item.size}
                                </span>{" "}
                              </Button>
                            </div>
                          </div>
                          <div>
                            <img
                              className="cartProductImage"
                              src={item.product.displayImage}
                              alt="Product"
                            />
                          </div>
                        </div>
                        <div className="cartProductDividerLine"></div>
                        <div className="cartProductButtonBox">
                          <button
                            className="cartProductButton"
                            onClick={() => {
                              handleRemoveProductFromCart(item.product._id);
                              handleClick();
                            }}
                          >
                            Remove
                          </button>
                          <hr className="cartProductButtonDividerLine"></hr>
                          <button className="cartProductButtonMyWishList">
                            Move to Wishlist
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    {cartProducts.results >= 1 && (
                      <button
                        className="clearCartButton"
                        onClick={() => {
                          handleClearCart();
                          setLoader(true);
                          handleCartClearClick();
                        }}
                      >
                        Clear Cart
                      </button>
                    )}
                  </div>
                </div>
                <div className="cartProductAddedRightContainer">
                  <div className="cartProductBillingContainer">
                    <h4>PRICE SUMMARY</h4>
                    <div className=" cartProductBillingBox">
                      <div className="cartProductBillingDetails">
                        <p className="cartProductBillingDetailsTag">
                          Total MRP (Incl. of taxes)
                        </p>
                        <p className="cartProductBillingDetailsPrice">
                          ₹{cartProducts?.data?.totalPrice}
                        </p>
                      </div>
                      <div className="cartProductBillingDetails">
                        <p className="cartProductBillingDetailsTag">
                          Delivery Fee
                        </p>
                        <p className="cartProductBillingDetailsDelivery">
                          {" "}
                          FREE
                        </p>
                      </div>
                      <div className="cartProductBillingDetails">
                        <p className="cartProductBillingDetailsTag">
                          Bag Discount
                        </p>
                        <p className="cartProductBillingDetailsPrice">- ₹0 </p>
                      </div>
                      <div className="cartProductBillingDetails">
                        <p className="cartProductBillingDetailsTag cartSubTotal">
                          Subtotal
                        </p>
                        <p className="cartProductBillingDetailsPrice cartSubTotal">
                          ₹{cartProducts?.data?.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cartProductBillingTotalDetailsContainer">
                    <div className="cartProductBillingTotalBox">
                      <div className="cartProductBillingTotalContainer">
                        <p className="cartProductBillingTotal">Total</p>
                        <h4 className="cartProductBillingTotalPrice">
                          ₹{cartProducts?.data?.totalPrice}
                        </h4>
                      </div>
                      <div className="cartProductAddAddressButtonBox">
                        <AddressBlock
                          productIds={productIds}
                          productQuantities={productQuantities}
                          handleClearCart={handleClearCart}
                        />
                      </div>
                    </div>
                    <div className="cartProductQualityServiceContainer">
                      <div className="cartProductQualityServiceBox">
                        <img
                          className="cartProductQualityServiceImage"
                          src={CartBadge}
                          alt="CartBadge"
                        />
                        <p className="cartProductQualityServiceText">
                          100% SECURE PAYMENTS
                        </p>
                      </div>
                      <div className="cartProductQualityServiceBox">
                        <img
                          className="cartProductQualityServiceImage"
                          src={CartEasyReturn}
                          alt="CartEasyReturn"
                        />
                        <p className="cartProductQualityServiceText">
                          EASY RETURNS & QUICK REFUNDS
                        </p>
                      </div>

                      <div className="cartProductQualityServiceBox">
                        <img
                          className="cartProductQualityServiceImage"
                          src={CartQuality}
                          alt="CartQuality"
                        />
                        <p className="cartProductQualityServiceText">
                          QUALITY ASSURANCE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cartProductPaymentImageBox">
                <img
                  className="cartProductPaymentImage"
                  src={Payments}
                  alt="Red Truck"
                />
              </div>
            </div>
          )
        ) : (
          <EmptyCart />
        )}
      </section>
      <div>{/* <Payment /> */}</div>
    </>
  );
};

export default Cart;
