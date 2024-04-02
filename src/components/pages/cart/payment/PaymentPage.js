import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Divider } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css";
import Axis from "./axis-1556185962.webp";
import Hdfc from "./hdfc-1556185961.webp";
import AmericanExpressCard from "./ic-american-express-payment-v1.webp";
import BhimPay from "./ic-bhim-upi-gray-payment-v1.webp";
import FreeRecharge from "./ic-freecharge-3x-payment-v1.webp";
import Gpay from "./ic-gpay-payment-gray-v1.webp";
import MasterCard from "./ic-master-card-payment-v1.webp";
import Mobikwik from "./ic-mobikwik-3x-payment-v1.webp";
import More from "./ic-more-option-payment-v1.webp";
import PhonePe from "./ic-phone-pe-gray-payment-v1.webp";
import PhonepeLogo from "./ic-phonepe-3x-payment-v1.webp";
import RUPAY from "./ic-rupay-payment-v1.webp";
import Visa from "./ic-visa-gray-payment-v1.webp";
import ICICI from "./icici-1556185960.webp";
import Kotak from "./kotak-1556185967.webp";
import PaytmBank from "./paytm-payment-wallet.webp";
import SBI from "./sbi-1556185961.webp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const PaymentPage = () => {
  const [value, setValue] = useState(0);

  const Navigate = useNavigate();

  const [selectedWallet, setSelectedWallet] = useState(null);

  const [selectedBank, setSelectedBank] = useState(null);

  const [orderPlacedStatus, setOrderPlacedStatus] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handlePay = () => {
    setSelectedWallet("");

    setTimeout(function () {
      Navigate("/orders");
    }, 2000);
  };

  const handleOrderStatus = () => {
    setOrderPlacedStatus(true);
  };

  const handleOrderStatusClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOrderPlacedStatus(false);
  };

  return (
    <section className="paymentPageSection">
      <div>
        <Snackbar
          open={orderPlacedStatus}
          autoHideDuration={6000}
          onClose={handleOrderStatusClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={handleOrderStatusClose}
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
            Thank you for shopping! Your order has been placed..!
          </Alert>
        </Snackbar>
      </div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto",
          width: "calc(60% - 0.2rem)",
          margin: "5%  10%",
          border: "0.1rem solid #ccc",
          "@media only screen and (max-width: 991px)": {
            width: "calc(90% - 0.2rem)",
          },
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            width: "calc(40% - 0.2rem)",
            borderRight: 0,
            borderColor: "divider",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Tab
            label="Debit & Credit Card"
            {...a11yProps(0)}
            sx={{
              padding: "1.8rem 0.5rem",
              borderBottom: "1px solid #ccc",
              borderRight:
                value === 0
                  ? "0.05rem solid transparent"
                  : "0.05rem solid #ccc",
            }}
          />
          <Tab
            label="Wallet"
            {...a11yProps(1)}
            sx={{
              padding: "1.8rem 0.5rem",
              borderBottom: "1px solid #ccc",
              borderRight:
                value === 1
                  ? "0.05rem solid transparent"
                  : "0.05rem solid #ccc",
            }}
          />
          <Tab
            label="UPI"
            {...a11yProps(2)}
            sx={{
              padding: "1.8rem 0.5rem",
              borderBottom: "1px solid #ccc",
              borderRight:
                value === 2
                  ? "0.05rem solid transparent"
                  : "0.05rem solid #ccc",
            }}
          />
          <Tab
            label="Net banking"
            {...a11yProps(3)}
            sx={{
              padding: "1.8rem 0.5rem",
              borderBottom: "1px solid #ccc",
              borderRight:
                value === 3
                  ? "0.05rem solid transparent"
                  : "0.05rem solid #ccc",
            }}
          />
          <Tab
            label="Cash On Delivery"
            {...a11yProps(4)}
            sx={{
              padding: "1.8rem 0",
              borderBottom: "1px solid #ccc",
              borderRight:
                value === 4
                  ? "0.05rem solid transparent"
                  : "0.05rem solid #ccc",
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0} sx={{ width: "calc(60% - 1rem)" }}>
          <div className="paymentPageCardContainer">
            <div className="paymentPageCardImageBox">
              <img className="paymentPageCardImage" src={Visa} alt="Visa" />
              <img
                className="paymentPageCardImage"
                src={MasterCard}
                alt="MasterCard"
              />
              <img className="paymentPageCardImage" src={RUPAY} alt="RUPAY" />
              <img
                className="paymentPageCardImage"
                src={AmericanExpressCard}
                alt="AmericanExpressCard"
              />
            </div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "25ch",
                  "@media only screen and (max-width: 991px)": {
                    width: "10ch",
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Card Number"
                variant="standard"
                InputLabelProps={{
                  sx: { color: "#737373", fontSize: "0.75rem" },
                }}
                required
              />
              <div className="cardDetailsBox">
                <TextField
                  id="standard-basic"
                  label="Valid through(MM/YY)"
                  variant="standard"
                  sx={{ width: "14ch" }}
                  InputLabelProps={{
                    sx: { color: "#737373", fontSize: "0.75rem" },
                  }}
                  required
                />
                <TextField
                  label="CVV"
                  id="filled-start-adornment"
                  sx={{ width: "8ch" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ErrorOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  InputLabelProps={{
                    sx: { color: "#737373", fontSize: "0.75rem" },
                  }}
                  required
                />
              </div>

              <TextField
                id="standard-basic"
                label="Name On Card"
                variant="standard"
                InputLabelProps={{
                  sx: { color: "#737373", fontSize: "0.75rem" },
                }}
                required
              />
            </Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Save card details for later"
                sx={{
                  color: "#525252",
                  fontSize: "0.875rem",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              />
            </FormGroup>
            <p className="paymentPageUPIText">
              This transaction you make is totally secure. We don't save your
              CVV number. Pay ₹799
            </p>

            <button
              className="paymentPageButton"
              onClick={() => {
                handlePay();
                handleOrderStatus();
              }}
            >
              pay
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} sx={{ width: "calc(60% - 1rem)" }}>
          <div class="paymentPageWalletContainer">
            <div class="paymentPageWalletBox">
              <div class="paymentPageWalletImageBox">
                <img
                  class="paymentPageWalletImage"
                  src={PaytmBank}
                  alt="Paytm Payment Wallet"
                />
              </div>
              <p>Paytm Payments Bank Wallet</p>
              <input
                type="radio"
                name="wallet"
                value="PaytmBank"
                onChange={handleWalletChange}
              />
            </div>
            {selectedWallet === "PaytmBank" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />

            <div class="paymentPageWalletBox">
              <div class="paymentPageWalletImageBox">
                <img
                  class="paymentPageWalletImage"
                  src={PhonepeLogo}
                  alt="Phone pe"
                />
              </div>
              <p>PhonePe</p>
              <input
                type="radio"
                name="wallet"
                value="Phonepe"
                onChange={handleWalletChange}
              />
            </div>
            {selectedWallet === "Phonepe" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />

            <div class="paymentPageWalletBox">
              <div class="paymentPageWalletImageBox">
                <img
                  class="paymentPageWalletImage"
                  src={Mobikwik}
                  alt="Mobikwik"
                />
              </div>
              <p>Mobikwik</p>
              <input
                type="radio"
                name="wallet"
                value="Mobikwik"
                onChange={handleWalletChange}
              />
            </div>
            {selectedWallet === "Mobikwik" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />

            <div class="paymentPageWalletBox">
              <div class="paymentPageWalletImageBox">
                <img
                  class="paymentPageWalletImage"
                  src={FreeRecharge}
                  alt="FreeRecharge"
                />
              </div>
              <p>Freecharge</p>
              <input
                type="radio"
                name="wallet"
                value="FreeRecharge"
                onChange={handleWalletChange}
              />
            </div>
            {selectedWallet === "FreeRecharge" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} sx={{ width: "calc(60% - 1rem)" }}>
          <div className="paymentPageUPIContainer">
            <div className="paymentPageUPIImageBox">
              <img className="paymentPageUPIImage" src={Gpay} alt="GPay" />
              <img
                className="paymentPageUPIImage"
                src={BhimPay}
                alt="BhimPay"
              />
              <img
                className="paymentPageUPIImage"
                src={PhonePe}
                alt="PhonePe"
              />
              <img className="paymentPageUPIImage" src={More} alt="PhonePe" />
            </div>
            <div className="paymentPageUPIDetailsBox">
              <div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "calc(60% - 0.2rem)" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label="UPI"
                    variant="standard"
                    InputLabelProps={{
                      sx: { color: "#737373", fontSize: "0.75rem" },
                    }}
                    required
                  />
                </Box>
              </div>
              <p className="paymentPageUPIText">
                UPI ID is in the format of yourname@bankname or
                yourmobile@bankname Save this UPI ID for future payments.
              </p>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Save this UPI ID for future payments."
                  sx={{ color: "#525252", fontSize: "0.875rem" }}
                />
              </FormGroup>

              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                VERIFY
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} sx={{ width: "calc(60% - 1rem)" }}>
          <div className="PaymentPageBankContainer">
            <div className="PaymentPageBankBox">
              <img className="PaymentPageBankLogo" src={ICICI} alt="ICICI" />
              <p>ICICI</p>
              <input
                type="radio"
                name="bank"
                value="ICICI"
                onChange={handleBankChange}
              />
            </div>
            {selectedBank === "ICICI" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />
            <div className="PaymentPageBankBox">
              <div class="paymentPageWalletImageBox">
                <img className="PaymentPageBankLogo" src={Axis} alt="Axis" />
              </div>
              <p> Axis</p>
              <input
                type="radio"
                name="bank"
                value="Axis"
                onChange={handleBankChange}
              />
            </div>
            {selectedBank === "Axis" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />
            <div className="PaymentPageBankBox">
              <div class="paymentPageWalletImageBox">
                <img className="PaymentPageBankLogo" src={SBI} alt="SBI" />
              </div>
              <p> SBI</p>
              <input
                type="radio"
                name="bank"
                value="SBI"
                onChange={handleBankChange}
              />
            </div>
            {selectedBank === "SBI" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />
            <div className="PaymentPageBankBox">
              <div class="paymentPageWalletImageBox">
                <img className="PaymentPageBankLogo" src={Hdfc} alt="Hdfc" />
              </div>
              <p> HDFC </p>
              <input
                type="radio"
                name="bank"
                value="HDFC"
                onChange={handleBankChange}
              />
            </div>
            {selectedBank === "HDFC" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
            <Divider />
            <div className="PaymentPageBankBox">
              <div class="paymentPageWalletImageBox">
                <img className="PaymentPageBankLogo" src={Kotak} alt="Kotak" />
              </div>
              <p> KOTAK</p>
              <input
                type="radio"
                name="bank"
                value="KOTAK"
                onChange={handleBankChange}
              />
            </div>
            {selectedBank === "KOTAK" && (
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                Pay
              </button>
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={4} sx={{ width: "calc(60% - 1rem)" }}>
          <div className="paymentCashOnDeliveryContainer">
            <div className="paymentCashOnDeliveryBox">
              <p className="paymentCashOnDeliveryText">
                Cash handling charges of ₹ 35 are applicable
              </p>
              <button
                className="paymentPageButton"
                onClick={() => {
                  handleOrderStatus();
                  handlePay();
                }}
              >
                pay
              </button>
            </div>
          </div>
        </TabPanel>
      </Box>
    </section>
  );
};

// .
