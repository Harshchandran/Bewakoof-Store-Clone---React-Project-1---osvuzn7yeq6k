import React from "react";
import { BestSellersCategories } from "../bestSellersSection/BestSellersCategories";
import { CategoriesToBag } from "../categoriesToBag/CategoriesToBag";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import { HeroBanner } from "../homePage/HeroBanner";
import { HomePageCoverImage } from "../homePage/HomePageCoverImage";
import { HomePageCategory } from "../homePageCategory/HomePageCategory";
import "../styles/Home.css";
import { TrendingCategories } from "../trendingCategories/TrendingCategories";

export default function Home() {
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
