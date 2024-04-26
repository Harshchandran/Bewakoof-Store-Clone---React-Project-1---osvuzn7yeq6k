import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import "./AddressBlock.css";
import { useNavigate } from "react-router-dom";
import { LoaderPage } from "../../pageLoader/LoaderPage";

export const AddressBlock = ({
  productIds,
  productQuantities,
  handleClearCart,
}) => {
  const [loader, setLoader] = useState(true);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [addressProductId, setAddressProductId] = useState("");
  const [name, setName] = useState("");

  const [updateAddress, setUpdateAddress] = useState([]);

  const navigate = useNavigate();

  const [addressData, setAddressData] = useState({
    productId: "",
    quantity: "",
    addressType: "other",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
    },
  });

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const storedData = JSON.parse(localStorage.getItem("userData"));

      if (storedData && storedData.user) {
        const userData = storedData.user;

        setName(userData.name);
      }
    }
    setLoader(false);
  }, []);

  const handleLoginSubmit = async () => {
    // e.preventDefault();
    try {
      for (let i = 0; i < productIds.length; i++) {
        const JWTToken = JSON.parse(localStorage.getItem("token"));
        const AddressUrl =
          "https://academics.newtonschool.co/api/v1/ecommerce/order";
        const projectId = "f105bi07c590";

        const productId = productIds[i];

        const productQuantity = productQuantities[i];

        const requestBody = {
          ...addressData,
          productId,
          quantity: productQuantity,
        };

        const response = await fetch(AddressUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWTToken}`,
            projectId: projectId,
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        setLoader(false);
        setUpdateAddress(data);
      }
    } catch (error) {
      console.error("Error fetching Login Data:", error);
    }
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setAddressData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (["street", "city", "state", "country", "zipCode"].includes(name)) {
      setAddressData((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [name]: value,
        },
      }));
    } else {
      setAddressData((prevState) => ({
        ...prevState,

        [name]: value,
      }));
    }
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handlePaymentNavigate = () => {
    navigate("/payment");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleClose();
    handleLoginSubmit();
    handlePaymentNavigate();
    handleClearCart();
    setLoader(true);
  };

  return (
    <React.Fragment>
      <div>
        <LoaderPage loader={loader} />
      </div>
      <button onClick={handleClickOpen("body")} className="addressButton">
        ADD ADDRESS
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className="AddressHeader">
          Add New Address
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "95%" },
              }}
              // noValidate
              autoComplete="off"
              onSubmit={handleFormSubmit}
            >
              <div>
                <TextField
                  id="outlined-basic"
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  value={name}
                  required
                />
                <TextField
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  type="tel"
                  required
                />
                <hr className="dividerAddressBox"></hr>
                <TextField
                  id="zipCode"
                  name="zipCode"
                  type="number"
                  inputProps={{
                    min: 100000,
                    max: 999999,
                  }}
                  label="Pincode/Postal Code/Zipcode"
                  variant="outlined"
                  value={addressData.zipCode}
                  onChange={handleChange}
                  required
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    id="country"
                    name="country"
                    label="Country"
                    variant="outlined"
                    value={addressData.address.country}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    id="state"
                    name="state"
                    label="State"
                    variant="outlined"
                    value={addressData.address.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  variant="outlined"
                  value={addressData.address.city}
                  onChange={handleChange}
                  required
                />

                <TextField
                  id="street"
                  name="street"
                  label="Flat no/Building, Street name"
                  variant="outlined"
                  value={addressData.address.street}
                  onChange={handleChange}
                  required
                />

                <TextField
                  id="outlined-basic"
                  label="Landmark (Optional)"
                  variant="outlined"
                  // onChange={handleChange}
                />
              </div>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Save Address As
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="addressType"
                  value={addressData.addressType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="HOME"
                    control={<Radio />}
                    label="HOME"
                  />
                  {/* <FormControlLabel
                  value="OTHER"
                  control={<Radio />}
                  label="OFFICE"
                /> */}
                  <FormControlLabel
                    value="OTHER"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <div className="addressSubmitButtonBox">
                <button className="addressSubmitButton" type="submit">
                  SAVE ADDRESS
                </button>
                <button className="addressCancelButton" onClick={handleClose}>
                  CANCEL
                </button>
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
