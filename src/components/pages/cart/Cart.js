import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import "./Cart.css";
import RedTruck from "./Red-truck.webp";
import { AddressBlock } from "./address/AddressBlock";
import CartBadge from "./cart-badge-trust.svg";
import CartEasyReturn from "./cart-easy-return.svg";
import EmptyCartImage from "./empty-cart-page-doodle.png";
import CartQuality from "./quality-check.svg";
import Payments from "./secure-payments-image.webp";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Cart = () => {
  const [token, setToken] = useState("");
  const [cartProducts, setCartProducts] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [itemQuantity, setItemQuantity] = useState(1);

  const GetCartItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/cart";
  const projectId = "f105bi07c590";

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);

      const getCartProducts = async () => {
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

          setCartItems(data.data.items);

          console.log(data);
        } catch (error) {
          console.error("Error fetching Best Sellers Selection:", error);
        }
      };
      getCartProducts();
    }
  }, [projectId]);

  const [deleteItemResponse, setDeleteItemResponse] = useState([]);
  const [singleProductId, setProductId] = useState("");

  const DeleteItemFromCartUrl = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${singleProductId}`;

  const getCartProducts = async () => {
    try {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      const response = await fetch(DeleteItemFromCartUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JWTToken}`,
          projectId: projectId,
        },
      });

      const data = await response.json();

      console.log("data from Delete Cart Block", data);

      setDeleteItemResponse(data);
    } catch (error) {
      console.error("Error fetching Best Sellers Selection:", error);
    }
  };

  const handleRemoveProductFromCart = (id) => {
    setProductId(id);
    getCartProducts();
  };

  return (
    <>
      <section className="cart">
        {token ? (
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
                    <div className="singleCartProductsContainer" key={item._id}>
                      <div className="cartProductSingleDetails">
                        <div className="cartProductSingleItemDetails">
                          <p className="cartProductName">{item.product.name}</p>
                          <h5 className="cartProductPrice">
                            ₹{item.product.price}
                          </h5>
                          <div>
                            <React.Fragment>
                              <Button
                                onClick={handleClickOpen}
                                sx={{ color: "#000", fontSize: "0.75rem" }}
                              >
                                Qty : {"   "}
                                <span style={{ fontWeight: 900 }}>
                                  {itemQuantity}
                                </span>{" "}
                                <ExpandMoreIcon sx={{ fontSize: "1rem" }} />
                              </Button>
                              <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                sx={{
                                  background: "transparent",
                                }}
                              >
                                <DialogTitle
                                  sx={{ m: 0, p: 2 }}
                                  id="customized-dialog-title"
                                  style={{ fontSize: "0.75rem" }}
                                >
                                  Select Quantity
                                </DialogTitle>

                                <Typography gutterBottom>
                                  <div className="cartAddQuantityContainer">
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(1);
                                        handleClose();
                                      }}
                                    >
                                      1
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(2);
                                        handleClose();
                                      }}
                                    >
                                      2
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(3);
                                        handleClose();
                                      }}
                                    >
                                      3
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(4);
                                        handleClose();
                                      }}
                                    >
                                      4
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(5);
                                        handleClose();
                                      }}
                                    >
                                      5
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(6);
                                        handleClose();
                                      }}
                                    >
                                      6
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(7);
                                        handleClose();
                                      }}
                                    >
                                      7
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(8);
                                        handleClose();
                                      }}
                                    >
                                      8
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(9);
                                        handleClose();
                                      }}
                                    >
                                      9
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        setItemQuantity(10);
                                        handleClose();
                                      }}
                                    >
                                      10
                                    </Button>
                                  </div>
                                </Typography>
                              </BootstrapDialog>
                            </React.Fragment>
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
                          onClick={() => handleRemoveProductFromCart(item._id)}
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
                      <p className="cartProductBillingDetailsDelivery"> FREE</p>
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
                      <AddressBlock itemQuantity={itemQuantity} />
                    </div>
                  </div>
                  <div className="cartProductQualityServiceContainer">
                    <div className="cartProductQualityServiceBox">
                      <img
                        className="cartProductQualityServiceImage"
                        src={CartBadge}
                        alt=""
                      />
                      <p className="cartProductQualityServiceText">
                        100% SECURE PAYMENTS
                      </p>
                    </div>
                    <div className="cartProductQualityServiceBox">
                      <img
                        className="cartProductQualityServiceImage"
                        src={CartEasyReturn}
                        alt=""
                      />
                      <p className="cartProductQualityServiceText">
                        {" "}
                        EASY RETURNS & QUICK REFUNDS
                      </p>
                    </div>

                    <div className="cartProductQualityServiceBox">
                      <img
                        className="cartProductQualityServiceImage"
                        src={CartQuality}
                        alt=""
                      />
                      <p className="cartProductQualityServiceText">
                        QUALITY ASSURANCE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={Payments} alt="Red Truck" />
            </div>
          </div>
        ) : (
          <div className="emptyCart">
            <div className="emptyCartContainer">
              <img
                className="emptyCartImage"
                src={EmptyCartImage}
                alt="Empty Cart"
              />
              <p className="emptyCartText">Nothing in the bag</p>
              <button className="emptyCartButton">Continue Shopping</button>
              <hr className="emptyCartDividerLine"></hr>
            </div>

            <div>
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
            </div>
            <div>
              <img src={Payments} alt="Red Truck" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
