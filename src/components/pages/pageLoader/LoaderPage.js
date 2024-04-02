import Backdrop from "@mui/material/Backdrop";
import React from "react";
import "./LoaderPage.css";
import LoaderImage from "../bwkf-loading-anim-common-loader.gif";

export const LoaderPage = ({ loader }) => {
  return (
    <>
      <Backdrop
        sx={{
          background: "transparent",
          color: "red",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={loader !== undefined ? loader : false}
      >
        <div className="pageLoaderImageBox">
          <img
            src={LoaderImage}
            alt="Loading...."
            className="pageLoaderImage"
          />
        </div>
      </Backdrop>
    </>
  );
};
