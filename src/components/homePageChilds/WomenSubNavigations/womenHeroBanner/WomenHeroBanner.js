import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pajamas from "./1x1-hc-pajama-women-1709216613.webp";
import TShirt from "./Women-1x1-MARCH-GPOT-Women-1710482197.jpg";
import Joggers from "./Women-Cargo-Joggers-Women-1x1-Banner--2--1710311395 (1).webp";
import Jeans from "./Women-HC--1x1-Trendy-Jeans-RM-1710482039.webp";
import Shorts from "./Women-HC-BANNERS---1X1-BOXERS--1--1710481250.webp";

import "./WomenHeroBanner.css";

export const WomenHeroBanner = () => {
  const WomenHeroBannerImages = [
    {
      url: Jeans,
      category: "jeans",
    },
    {
      url: TShirt,
      category: "tshirt",
    },
    {
      url: Pajamas,
      category: "pyjamas",
    },
    {
      url: Joggers,
      category: "jogger",
    },
    {
      url: Shorts,
      category: "shorts",
    },
  ];

  const [womenActiveHeroImage, setWomenActiveHeroImage] = useState(0);

  const prevSlide = () => {
    setWomenActiveHeroImage((prevIndex) =>
      prevIndex === 0 ? WomenHeroBannerImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setWomenActiveHeroImage((prevIndex) =>
      prevIndex >= WomenHeroBannerImages.length - 3 ? 0 : prevIndex + 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [womenActiveHeroImage]);

  return (
    <>
      <section className="womenHeroBannerContainer">
        <NavigateBeforeOutlinedIcon
          className="heroRightSideNavigation"
          onClick={prevSlide}
          sx={{ fontSize: "calc(1.5vw + 1.5vh + 1vmin)", fontWeight: "200" }}
        />

        <div className="pageNavigation">
          {WomenHeroBannerImages.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => {
                setWomenActiveHeroImage(index);
              }}
            >
              {womenActiveHeroImage === index ? (
                <FiberManualRecordIcon
                  style={{
                    fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
                    color: "white",
                    opacity: "0.6",
                  }}
                />
              ) : (
                <FiberManualRecordOutlinedIcon
                  style={{
                    fontSize: "calc(0.5vw + 0.5vh + 1vmin)",
                    color: "white",
                    opacity: "0.4",
                  }}
                />
              )}
            </IconButton>
          ))}
        </div>

        <div className="womenHeroImagesContainer">
          {Array.from({ length: 3 }).map((_, index) => {
            const imageIndex =
              (womenActiveHeroImage + index) % WomenHeroBannerImages.length;
            const image = WomenHeroBannerImages[imageIndex];

            return (
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: image.category }}
              >
                <div
                  key={index}
                  className={`womenHeroImageBox ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="womenHeroBannerImage"
                    src={image.url}
                    alt={`hero${imageIndex}`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <NavigateNextOutlinedIcon
          className="heroLeftSideNavigation"
          onClick={nextSlide}
          sx={{ fontSize: "calc(1.5vw + 1.5vh + 1vmin)", fontWeight: "200" }}
        />
      </section>
    </>
  );
};
