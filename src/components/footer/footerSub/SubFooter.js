import React, { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import "./SubFooter.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import AndriodAPP from "./app_android_v1.webp";
import AppleAPP from "./app_ios_v1.webp";
import SecurePayment from "./secure-payments-image.webp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const ariaLabel = { "aria-label": "description" };

export const SubFooter = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
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
          sx={{
            zIndex: 10000,
          }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{
              width: "100%",
              backgroundColor: "#ffd84d",
              color: "#000",
              fontWeight: 900,
              "& .MuiAlert-icon": {
                display: "none",
              },
            }}
            icon={false}
          >
            The Page is under Construction <PrecisionManufacturingIcon />
          </Alert>
        </Snackbar>
      </div>
      <section className="subFooterContainer">
        <div className="subFooterContactContainer">
          <div className="subFooterContactBox">
            <div>
              <button className="subFooterHeading">CUSTOMER SERVICE</button>
              <div className="subFooterContactLinkBox">
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Contact Us
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Track Order
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Return Order
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Cancel Order
                </button>
              </div>
            </div>
            <div>
              <button className="subFooterHeading">COMPANY</button>
              <div className="subFooterContactLinkBox">
                <button className="subFooterNavButtons" onClick={handleClick}>
                  About Us
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  We're Hiring
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Terms & Conditions
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Privacy Policy
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Blog
                </button>
              </div>
            </div>

            <div>
              <div className="subFooterHeading">CONNECT WITH US</div>
              <div className="subFooterContactLinkBox">
                <button className="subFooterNavButtons" onClick={handleClick}>
                  {" "}
                  <FacebookIcon /> 4.7M People Like
                </button>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  <InstagramIcon />
                  this 1M Followers
                </button>
              </div>
              <div className="subFooterSocialIconsBox">
                <TwitterIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />{" "}
                <PinterestIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <XIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />{" "}
                <AppleIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
              </div>
            </div>
            <div>
              <div className="subFooterHeading">KEEP UP TO DATE Enter</div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 0 },
                  "& .MuiInput-underline:after": {
                    borderBottom: "0.1rem solid #fdd835",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Input
                  required
                  placeholder="Email Id"
                  inputProps={ariaLabel}
                  sx={{
                    color: "#ffff",
                    fontSize: "0.75rem",
                  }}
                />
                <button className="subFooterEmailSubmitButton">
                  SUBSCRIBE
                </button>
              </Box>
            </div>
          </div>
          <div className="subFooterContactBox ">
            <div className="subFooterContactLinkBox">
              <button className="subFooterNavButtons" onClick={handleClick}>
                {" "}
                15 Days return policy*
              </button>
              <button className="subFooterNavButtons" onClick={handleClick}>
                {" "}
                Cash on delivery*
              </button>
            </div>

            <div>
              <button className="subFooterHeading"> DOWNLOAD THE APP</button>
              <div className="subFooterAPPStoreBox">
                <img
                  className="subFooterAppStoreImg"
                  src={AndriodAPP}
                  alt="Google Play"
                  onClick={handleClick}
                />
                <img
                  className="subFooterAppStoreImg"
                  src={AppleAPP}
                  alt="Apple Store"
                  onClick={handleClick}
                />
              </div>
            </div>
            <div>
              <button className="subFooterHeading">
                100% SECURE PAYMENT secure payments
              </button>
              <div className="subFooterContactLinkBox">
                <img
                  src={SecurePayment}
                  onClick={handleClick}
                  alt="Secure Payments"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="subFooterContactContainerMini">
          <div className="subFooterContactBoxMini">
            <div>
              <button className="subFooterHeading">CUSTOMER SERVICE</button>
              <div className="subFooterContactLinkBoxMini">
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Contact Us
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Track Order
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Return Order
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Cancel Order
                </button>
              </div>
            </div>
            <div>
              <button className="subFooterHeading">COMPANY</button>
              <div className="subFooterContactLinkBoxMini">
                <button className="subFooterNavButtons" onClick={handleClick}>
                  About Us
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  We're Hiring
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Terms & Conditions
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Privacy Policy
                </button>
                <p>|</p>
                <button className="subFooterNavButtons" onClick={handleClick}>
                  Blog
                </button>
              </div>
            </div>

            <div>
              <div className="subFooterHeading">CONNECT WITH US</div>

              <div className="subFooterSocialIconsBoxMini">
                <FacebookIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <InstagramIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <TwitterIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <PinterestIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <XIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <AppleIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
              </div>
            </div>
            <div>
              <button className="subFooterHeading"> DOWNLOAD THE APP</button>
              <div className="subFooterAPPStoreBoxMini">
                <AdbIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
                <AppleIcon
                  onClick={handleClick}
                  sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="subFooterContactBoxMini">
            <div className="subFooterContactLinkBoxMiniNav">
              <button className="subFooterNavButtons" onClick={handleClick}>
                <ShoppingCartCheckoutIcon
                  sx={{ fontSize: "1rem", cursor: "pointer" }}
                />
                15 Days return policy*
              </button>
              <button className="subFooterNavButtons" onClick={handleClick}>
                <CurrencyRupeeIcon
                  sx={{ fontSize: "1rem", cursor: "pointer" }}
                />
                Cash on delivery*
              </button>
            </div>
          </div>
        </div>

        <hr></hr>

        {/*<div className="subFooterNavLinksContainer">
          <div>
            <button className="subFooterHeading">MEN'S CLOTHING</button>
            <button className="subFooterNavButtons"> </button>
            <div className="subFooterProductLinkBox"></div>
          </div>
          <div>
            <button className="subFooterHeading">WOMEN'S CLOTHING</button>
            <div className="subFooterProductLinkBox"></div>
          </div>
        </div> */}
      </section>
    </>
  );
};
