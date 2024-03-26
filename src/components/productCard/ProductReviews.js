import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { ProductReviewRatings } from "./ProductReviewRatings";
import "./ProductReviews.css";
import IcShield from "./ic-shield--check.svg";

export const ProductReviews = ({ productReview, overallRatings }) => {
  const [value, setValue] = useState("1");

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [four, setFour] = useState(0);
  const [five, setFive] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const RatingData = overallRatings;

  const brandReviews = false;

  const renderStars = (rating) => {
    let stars = [];

    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars = [
          ...stars,
          <StarOutlinedIcon key={i} style={{ color: "#ffd84d" }} />,
        ];
      } else if (i === filledStars && hasHalfStar) {
        stars = [
          ...stars,
          <StarHalfOutlinedIcon key={i} style={{ color: "#ffd84d" }} />,
        ];
      } else {
        stars = [...stars, <StarBorderPurple500OutlinedIcon key={i} />];
      }
    }

    return { stars };
  };

  useEffect(() => {
    let oneCount = 0,
      twoCount = 0,
      threeCount = 0,
      fourCount = 0,
      fiveCount = 0;

    productReview.forEach((data) => {
      switch (data?.ratings) {
        case 1:
          oneCount++;
          break;
        case 2:
          twoCount++;
          break;
        case 3:
          threeCount++;
          break;
        case 4:
          fourCount++;
          break;
        case 5:
          fiveCount++;
          break;
        default:
          break;
      }
    });

    setOne(oneCount);
    setTwo(twoCount);
    setThree(threeCount);
    setFour(fourCount);
    setFive(fiveCount);

    const totalCount = oneCount + twoCount + threeCount + fourCount + fiveCount;
    setTotalCount(totalCount);
  }, [productReview]);

  return (
    <>
      <div>ProductReviews</div>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              indicatorColor="none"
              sx={{
                display: "flex",
              }}
            >
              <Tab
                label="PRODUCT REVIEWS"
                value="1"
                style={{
                  display: "flex",
                  width: "50%",
                  color: value === "1" ? "#292d35" : "#8f98a9", // Set different colors for active and inactive tabs
                  fontWeight: "bolder",
                  borderBottom: `0.3rem solid ${
                    value === "1" ? "#ffd84d" : "#f1f1f1"
                  }`,
                }}
              />
              <Tab
                label="BRAND REVIEWS"
                value="2"
                style={{
                  display: "flex",
                  width: "50%",
                  color: value === "2" ? "#292d35" : "#8f98a9", // Set different colors for active and inactive tabs
                  fontWeight: "bolder",
                  borderBottom: `0.3rem solid ${
                    value === "2" ? "#ffd84d" : "#f1f1f1"
                  }`,
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProductReviewRatings
              RatingData={RatingData}
              brandReviews={!brandReviews}
              one={one}
              two={two}
              three={three}
              four={four}
              five={five}
              totalCount={totalCount}
            />
            <div>
              {productReview?.map((data, index) => (
                <div key={index}>
                  <div>
                    <div>
                      <div>{renderStars(data?.ratings).stars}</div>
                      {/* <p>{data?.ratings}</p> */}
                      <div className="ProductReviewsVerifiedBuyerBox">
                        <img src={IcShield} alt="IcShield" />
                        <p> Verified Buyer</p>
                      </div>
                    </div>
                    {/* <p> {data?.product}</p> */}
                    <p className="ProductReviewsCustomerReview">{data?.text}</p>
                  </div>
                  <hr className="ProductReviewsDivider" />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <ProductReviewRatings
              brandReviews={brandReviews}
              RatingData={RatingData}
              one={one}
              two={two}
              three={three}
              four={four}
              five={five}
              totalCount={totalCount}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};
