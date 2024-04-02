import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pajamas from "./Men-1x1-hc-pajama-men--1--1709216825 (1).webp";
import TShirt from "./Men-1x11-MARCH-GPOT-Men-1709877218.jpg";
import Joggers from "./Men-Cargo-Joggers-Men-1x1-Banner-1710311810 (1).webp";
import Jeans from "./Men-HC--1x1-Trendy-Jeans-IK--1--1710482225.webp";
import Shorts from "./Men-Shorts-HC-banner-1x1-1707056238.webp";
import "./MenHeroBanner.css";

export const MenHeroBanner = () => {
  const MenHeroBannerImages = [
    {
      url: Jeans,
      filter: {
        subCategory: "jeans",
        gender: "Men",
      },
    },
    {
      url: TShirt,
      filter: {
        subCategory: "tshirt",
        gender: "Men",
      },
    },
    {
      url: Pajamas,
      filter: {
        subCategory: "pyjamas",
        gender: "Men",
      },
    },
    {
      url: Joggers,
      filter: {
        subCategory: "jogger",
        gender: "Men",
      },
    },
    {
      url: Shorts,
      filter: {
        subCategory: "shorts",
        gender: "Men",
      },
    },
  ];

  const [menActiveHeroImage, setMenActiveHeroImage] = useState(0);

  const prevSlide = () => {
    setMenActiveHeroImage((prevIndex) =>
      prevIndex === 0 ? MenHeroBannerImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setMenActiveHeroImage((prevIndex) =>
      prevIndex >= MenHeroBannerImages.length - 3 ? 0 : prevIndex + 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [menActiveHeroImage]);

  return (
    <>
      <section className="menHeroBannerContainer">
        <NavigateBeforeOutlinedIcon
          className="heroRightSideNavigation"
          onClick={prevSlide}
          sx={{ fontSize: "calc(1.5vw + 1.5vh + 1vmin)", fontWeight: "200" }}
        />

        <div className="pageNavigation">
          {MenHeroBannerImages.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => {
                setMenActiveHeroImage(index);
              }}
            >
              {menActiveHeroImage === index ? (
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

        <div className="menHeroImagesContainer">
          {Array.from({ length: 3 }).map((_, index) => {
            const imageIndex =
              (menActiveHeroImage + index) % MenHeroBannerImages.length;
            const image = MenHeroBannerImages[imageIndex];

            return (
              <Link
                to="/productPage"
                key={index}
                state={{ filter: image.filter }}
              >
                <div
                  key={index}
                  className={`menHeroImageBox ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="menHeroBannerImage"
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
