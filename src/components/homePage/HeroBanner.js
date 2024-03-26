import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import HeroBannerOne from "../homePage/BewakoofHeroPoster1.gif";
import HeroBannerTwo from "../homePage/BewakoofHeroPoster3.webp";
import HeroBannerThree from "./Men-Shorts-HC-banner-1x1-1707056238.webp";
import HeroBannerFour from "../homePage/BewakoofHeroPoster5.gif";
import HeroBannerFive from "../homePage/BewakoofHeroPoster6.webp";
import HeroBannerSix from "./1x1-hc-pajama-men--1--1709216825.webp";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

export const HeroBanner = () => {
  const images = [
    {
      url: HeroBannerOne,
      category: "tshirt",
    },
    {
      url: HeroBannerTwo,
      category: "sweater",
    },
    {
      url: HeroBannerSix,
      category: "pyjamas",
    },
    {
      url: HeroBannerThree,
      category: "shorts",
    },
    {
      url: HeroBannerFour,
      category: "jogger",
    },
    {
      url: HeroBannerFive,
      category: "tshirt",
    },
  ];

  const [activeHeroImage, setActiveHeroImage] = useState(0);

  const prevSlide = () => {
    setActiveHeroImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveHeroImage((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [activeHeroImage]);

  return (
    <>
      <section className="heroBannerContainer">
        <NavigateBeforeOutlinedIcon
          className="heroRightSideNavigation"
          onClick={prevSlide}
          sx={{ fontSize: "calc(1.5vw + 1.5vh + 1vmin)", fontWeight: "200" }}
        />

        <div className="pageNavigation">
          {images.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => {
                setActiveHeroImage(index);
              }}
            >
              {activeHeroImage === index ? (
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

        <div className="heroImagesContainer">
          {Array.from({ length: 3 }).map((_, index) => {
            const imageIndex = (activeHeroImage + index) % images.length;
            const pic = images[imageIndex];

            return (
              <Link
                to="/productPage"
                className=""
                key={index}
                state={{ category: pic.category }}
              >
                <div
                  key={index}
                  className={`heroImageBox ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="heroBannerImage"
                    src={pic.url}
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
