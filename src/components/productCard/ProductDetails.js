import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "../productCard/ProductDetails.css";
import EasyReturn from "./Easy-Returns.svg";
import { ProductDescriptionAccordion } from "./ProductDescriptionAccordion";
import { ProductReviews } from "./ProductReviews";
import LocationIcon from "./ic-location.svg";
import IndianFlag from "./india-flag-round-1639566913.png";
import BewakoofBlackLogo from "./logo-tribe-black.webp";
import OriginalIcon from "./original-icon.webp";
import TrustCart from "./trust-cart.svg";
import DressSize from "./men_full_sleeves_tshirts-1484025774.webp";
import Cms from "./Cms.jpg";
import In from "./In.jpg";
import { AddSizeToUpdateCart } from "./addSizeToCart/AddSizeToUpdateCart";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "28%",
  minWidth: "31rem",
  height: "auto",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 0,
};

export const ProductDetails = ({
  productDetails,
  productReview,
  updateCartItemNumber,
}) => {
  const [openMemberShip, setOpenMemberShip] = useState(false);
  const handleOpenMemberShip = () => setOpenMemberShip(true);
  const handleCloseMemberShip = () => setOpenMemberShip(false);
  const [buttonColor, setButtonColor] = useState("white");
  const [addToCartMembership, setAddToCartMembership] = useState(false);

  const [openSize, setOpenSize] = React.useState(false);
  const handleOpenSize = () => setOpenSize(true);
  const handleCloseSize = () => setOpenSize(false);

  const [valueSize, setValueSize] = useState("1");

  const [token, setToken] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [updateSize, setUpdateSize] = useState("");
  const SingleProductId = productDetails?._id;
  const [AddingItemToCart, setAddingItemToCart] = useState({
    quantity: 1,
    size: "",
  });

  const [UpdateResponse, setUpdateResponse] = useState([]);

  const [UpdateWishlistResponse, setUpdateWishlistResponse] = useState([]);

  const productDetailsSize = productDetails?.size;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const JWTToken = JSON.parse(localStorage.getItem("token"));
      setToken(JWTToken);
    }
  }, []);

  const UpdateCartItemsApi = `https://academics.newtonschool.co/api/v1/ecommerce/cart/${SingleProductId}`;
  const projectId = "f105bi07c590";

  const updateItemToCart = async (e) => {
    try {
      const response = await fetch(UpdateCartItemsApi, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          projectId: projectId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AddingItemToCart),
      });

      const data = await response.json();

      setUpdateResponse(data);

      setUpdateSize("");
    } catch (error) {
      console.error("Error updating item to cart:", error);
    }
  };

  const handleSizeChange = (newSize) => {
    setAddingItemToCart((prevState) => ({
      ...prevState,
      size: newSize,
    }));
  };

  const updateQuantity = (event) => {
    const newQuantity = parseInt(event.target.value); // Convert string to number
    setAddingItemToCart((prevState) => ({
      ...prevState,
      quantity: newQuantity,
    }));
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
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
            icon={false}
          >
            Product Added to Cart Successfully..!
          </Alert>
        </Snackbar>
      </div>
      <div className="productDetailsContainer">
        <div className="productDetailsBox" key={productDetails?._id}>
          <p className="productDetailsSellerName">
            {productDetails?.seller?.name}
          </p>
          <p className="productDetailsProductName">{productDetails?.name}</p>

          <div className="productDetailsRatingBox">
            <StarIcon style={{ color: "gold" }} />
            {productDetails?.ratings?.toFixed(1)}
          </div>

          <div className="productDetailsCurrencyBox">
            <p className="productDetailsCurrency">
              <CurrencyRupeeSharpIcon style={{ fontSize: "1.2rem" }} />
              {productDetails?.price}
            </p>
            <p className="productDetailsCurrencyText">inclusive of all taxes</p>
          </div>
        </div>

        <hr className="productDetailsSizesDividerLine"></hr>

        <div>
          <p className="productDetailsMemberShipBox">
            TriBe members get an extra discount of ₹60 and FREE shipping.
            <span
              className="productDetailsMembershipSpan"
              onClick={handleOpenMemberShip}
            >
              {" "}
              Learn more
            </span>
            <Modal
              open={openMemberShip}
              onClose={handleCloseMemberShip}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="membershipLogoContainer">
                    <img
                      className="bewakoofBlackLogo"
                      src={BewakoofBlackLogo}
                      alt="BewakoofLogo"
                    />
                    <h5 className="membershipLogoHeading">
                      Get the TriBe Membership & Never Pay Full Price Again
                    </h5>
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <section>
                    <div className="memberShipOffersContainer">
                      <h4 className="memberShipOfferSubHeading">
                        TriBe Benefits
                      </h4>
                      <div className="memberShipOffersBox">
                        <StarRoundedIcon style={{ color: "#ffd84d" }} />
                        <div className="memberShipOfferTextBox">
                          <h4 className="memberShipOfferSubHeading">
                            Member Only Discounts
                          </h4>
                          <p className="memberShipOfferText">
                            Save on every purchase! Enjoy special prices on a
                            wide range of product categories
                          </p>
                        </div>
                      </div>

                      <div className="memberShipOffersBox">
                        <StarRoundedIcon style={{ color: "#ffd84d" }} />
                        <div className="memberShipOfferTextBox">
                          <h4 className="memberShipOfferSubHeading">
                            Priority Support
                          </h4>
                          <p className="memberShipOfferText">
                            Get all your queries resolved on a priority basis,
                            only for TriBe members
                          </p>
                        </div>
                      </div>

                      <div className="memberShipOffersBox">
                        <StarRoundedIcon style={{ color: "#ffd84d" }} />
                        <div className="memberShipOfferTextBox">
                          <h4 className="memberShipOfferSubHeading">
                            Early Access to Collections
                          </h4>
                          <p className="memberShipOfferText">
                            Grab the latest products and exclusive collections
                            before everyone else
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="memberShipOfferButtonBox">
                      <h5>Become a TriBe Member now!</h5>

                      <Button
                        onClick={() => {
                          setButtonColor("#fdd835");
                          setAddToCartMembership(true);
                        }}
                        style={{
                          color: "#000",
                          backgroundColor: buttonColor,
                        }}
                        className="addMemberShipToCartButton"
                      >
                        <p>3 months</p>
                        <h3>₹ 129</h3>
                      </Button>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: addToCartMembership
                            ? "#42a2a2"
                            : "#c7c7c7",
                        }}
                      >
                        ADD TO BAG
                      </Button>
                    </div>
                  </section>
                </Typography>
              </Box>
            </Modal>
          </p>
        </div>

        <hr className="productDetailsSizesDividerLine"></hr>

        <div>
          <div style={{ background: productDetails?.color }}></div>
        </div>

        <div className="productDetailsSizesContainer">
          <div className="productDetailsSizesTitle">
            <h6>SELECT SIZE</h6>
            <h6 onClick={handleOpenSize} style={{ color: "#42a2a2" }}>
              Size Guide
            </h6>
            <Modal
              open={openSize}
              onClose={handleCloseSize}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="dressSizesContainer">
                    <h4>SIZE GUIDE</h4>
                    <img
                      className="dressSizes"
                      src={DressSize}
                      alt="DressSize"
                    />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Box sx={{ width: "100%", typography: "body1" }}>
                    <TabContext value={valueSize}>
                      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList
                          onChange={(event, newValue) => setValueSize(newValue)}
                          aria-label="lab API tabs example"
                          centered
                          textColor="secondary"
                          indicatorColor="secondary"
                        >
                          <Tab label="In" value="1" />
                          <Tab label="Cms" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <div className="dressSizesImageBox">
                          <img
                            className="dressSizesImages"
                            src={In}
                            alt="Inches"
                          />
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <div className="dressSizesImageBox">
                          <img
                            className="dressSizesImages"
                            src={Cms}
                            alt="Centimeter"
                          />
                        </div>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="productDetailsSizesButtonBox">
            {productDetails?.size?.map((data, index) => (
              <button
                key={index}
                className={`productDetailsSizesButton ${
                  updateSize === data ? "selected" : ""
                }`}
                onClick={() => {
                  setUpdateSize(data);
                  handleSizeChange(data);
                }}
              >
                {data}
              </button>
            ))}
          </div>
          <div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "10ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-number"
                label="Quantity"
                type="number"
                value={AddingItemToCart.quantity}
                onChange={updateQuantity}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  min: 1,
                  max: 1000,
                }}
              />
            </Box>
          </div>
        </div>
        <div className="productDetailsButtonWishListsBox">
          <AddSizeToUpdateCart
            setUpdateSize={setUpdateSize}
            productDetailsSize={productDetailsSize}
            updateItemToCart={updateItemToCart}
            updateSize={updateSize}
            handleSizeChange={handleSizeChange}
            handleClick={handleClick}
            updateCartItemNumber={updateCartItemNumber}
          />
          {/* <button
            className="productDetailsButtonWishListsButton"
            onClick={() => {
              updateWishlist();
            }}
          >
            <FavoriteBorderSharpIcon style={{ color: "#4f5362 [500] " }} />
            WISHLIST
          </button> */}
        </div>

        <hr className="productDetailsSizesDividerLine"></hr>

        <div className="productDetailsDeliveryBox">
          <div className="productDetailsCheckAddress">
            <img src={LocationIcon} alt="LocationIcon" />
            <p>CHECK FOR DELIVERY DETAILS</p>
          </div>
          <p className="productDetailsDelivery">
            Delivering all across
            <span className="productDetailsCountryBox">
              India
              <img
                className="productDetailsIndianFlag"
                src={IndianFlag}
                alt="Indian Flag"
              />
            </span>
          </p>
        </div>

        <hr className="productDetailsSizesDividerLine"></hr>

        <ProductDescriptionAccordion
          productDetails={productDetails?.description}
        />

        <div className="productDetailsTrustDeliveryBox">
          <div className="productDetailsTrustDelivery">
            <img
              className="productDetailsTrustDeliveryImage"
              src={TrustCart}
              alt="TrustCart"
            />
            <p>100% SECURE PAYMENTS</p>
          </div>
          <div className="productDetailsTrustDelivery">
            <img
              className="productDetailsTrustDeliveryImage"
              src={EasyReturn}
              alt="EasyReturn"
            />
            <p>EASY RETURNS & INSTANT REFUNDS</p>
          </div>
          <div className="productDetailsTrustDelivery">
            <img
              className="productDetailsTrustDeliveryImage"
              src={OriginalIcon}
              alt="OriginalIcon"
            />
            <p>100% GENUINE PRODUCT</p>
          </div>
        </div>

        <hr className="productDetailsSizesDividerLine"></hr>

        <ProductReviews
          productReview={productReview}
          overallRatings={productDetails?.ratings}
        />
      </div>
    </>
  );
};
