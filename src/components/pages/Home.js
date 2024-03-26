import React from "react";
import { BestSellersCategories } from "../bestSellersSection/BestSellersCategories";
import { CategoriesToBag } from "../categoriesToBag/CategoriesToBag";
import { Footer } from "../footer/Footer";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import { HeroBanner } from "../homePage/HeroBanner";
import { HomePageCoverImage } from "../homePage/HomePageCoverImage";
import { HomePageCategory } from "../homePageCategory/HomePageCategory";
import "../styles/Home.css";
import { TrendingCategories } from "../trendingCategories/TrendingCategories";

export default function Home() {
  // const [myValue, setValue] = useState("hello");
  return (
    <>
      <HomeNavigation />
      <HeroBanner />
      <HomePageCategory />
      <HomePageCoverImage />

      <TrendingCategories />

      <CategoriesToBag />
      <BestSellersCategories />

      {/* <DemoWork myValue={myValue} /> */}
      {/* <ProductCard /> */}

      <Footer />
    </>
  );
}
