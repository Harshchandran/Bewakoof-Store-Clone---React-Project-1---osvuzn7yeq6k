import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useState, useEffect } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const AddSizeToUpdateCart = ({
  setUpdateSize,
  productDetailsSize,
  updateItemToCart,
  updateSize,
  handleSizeChange,
  handleClick,
  updateCartItemNumber,
}) => {
  useEffect;
  const [open, setOpen] = useState(false);

  const [localStorageCartCount, setLocalStorageCartCount] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (localStorage.getItem("cartItemsNumber")) {
      const ItemsInCart = JSON.parse(localStorage.getItem("cartItemsNumber"));
      setLocalStorageCartCount(ItemsInCart);
    }
  }, []);

  const GetCartItemsURL =
    "https://academics.newtonschool.co/api/v1/ecommerce/cart";
  const projectId = "f105bi07c590";

  const getCartProducts = async () => {
    if (localStorage.getItem("token")) {
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

        localStorage.setItem("cartItemsNumber", JSON.stringify(data.results));

        updateCartItemNumber();
      } catch (error) {
        console.error("Error fetching Cart Items:", error);
      }
    }
  };

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <React.Fragment>
      <button
        variant="outlined"
        // onClick={updateSize === "" ? handleClickOpen  : updateItemToCart}
        onClick={() => {
          if (updateSize === "") {
            handleClickOpen();
          } else {
            updateItemToCart();
            handleClick();
            setTimeout(() => {
              getCartProducts();
            }, 2000);
          }
        }}
        className="productDetailsButtonAddToBagButton"
      >
        <ShoppingBagOutlinedIcon />
        ADD TO BAG
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">
          Choose your perfect fit!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="productDetailsSizesButtonBox">
              {productDetailsSize?.map((data, index) => (
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
          </Typography>
        </DialogContent>
        <Button
          autoFocus
          sx={{
            width: "94%",
            margin: "0.5rem",
            padding: "0.5rem 1rem",
            background: "#42a2a2",
            color: "#ffff",
            "&:hover": {
              background: "rgba(66, 162, 162,0.8)",
            },
          }}
          onClick={() => {
            updateItemToCart();
            handleClose();
            handleClick();

            setTimeout(() => {
              getCartProducts();
            }, 2000);
          }}
        >
          Done
        </Button>
      </BootstrapDialog>
    </React.Fragment>
  );
};
