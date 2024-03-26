import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import IcShield from "./ic-shield--check.svg";
import "../productCard/ProductReviewRatings.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const ProductReviewRatings = ({
  brandReviews,
  RatingData,
  one,
  two,
  three,
  four,
  five,
  totalCount,
}) => {
  // console.log(starCounts);

  return (
    <>
      <section className="ProductReviewRatingsContainer">
        <div className="ProductReviewRatingsPercentageText">
          <img style={{ width: "1.5rem" }} src={IcShield} alt="IcShield" />
          <span> % of verified buyers recommend this product</span>
        </div>

        <div className="ProductReviewRatingsDetailsBox">
          <div className="ProductReviewRatingsDetailsContent">
            <h1>{RatingData?.toFixed(1)}</h1>
            <p>{totalCount} ratings</p>
            <p>{brandReviews}</p>
            {brandReviews && (
              <button className="ProductReviewRatingsDetailsButton">
                RATE
              </button>
            )}
          </div>

          <div className="ProductReviewRatingsProgressContainer">
            <div className="ProductReviewRatingsProgressBox">
              <p className="ProductReviewRatingsNumber">5</p>
              <StarIcon />
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(one / totalCount) * 100}
                />
              </Box>
              <p>({one})</p>
            </div>

            <div className="ProductReviewRatingsProgressBox">
              <p className="ProductReviewRatingsNumber">4</p>
              <StarIcon />
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(two / totalCount) * 100}
                />
              </Box>
              <p>({two})</p>
            </div>

            <div className="ProductReviewRatingsProgressBox">
              <p className="ProductReviewRatingsNumber">3</p>
              <StarIcon />
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(three / totalCount) * 100}
                />
              </Box>
              <p>({three})</p>
            </div>

            <div className="ProductReviewRatingsProgressBox">
              <p className="ProductReviewRatingsNumber">2</p>
              <StarIcon />
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(four / totalCount) * 100}
                />
              </Box>
              <p>({four})</p>
            </div>

            <div className="ProductReviewRatingsProgressBox">
              <p className="ProductReviewRatingsNumber">1</p>
              <StarIcon />
              <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress
                  variant="determinate"
                  value={(five / totalCount) * 100}
                />
              </Box>
              <p>({five})</p>
            </div>
          </div>
        </div>
      </section>

      <div></div>
    </>
  );
};
