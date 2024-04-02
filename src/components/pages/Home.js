import React, { useEffect, useState } from "react";
import { BestSellersCategories } from "../bestSellersSection/BestSellersCategories";
import { CategoriesToBag } from "../categoriesToBag/CategoriesToBag";
import { Footer } from "../footer/Footer";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import { HeroBanner } from "../homePage/HeroBanner";
import { HomePageCoverImage } from "../homePage/HomePageCoverImage";
import { HomePageCategory } from "../homePageCategory/HomePageCategory";
import "../styles/Home.css";
import { TrendingCategories } from "../trendingCategories/TrendingCategories";
import LoaderImage from "./bwkf-loading-anim-common-loader.gif";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <>
      <HomeNavigation />
      <HeroBanner />
      <HomePageCategory />
      <HomePageCoverImage />

      <TrendingCategories />

      <CategoriesToBag />
      <BestSellersCategories />
    </>
  );
}
