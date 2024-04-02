import React from "react";
import { WomenMiniCategory } from "./womenMiniCategory/WomenMiniCategory";
import { WomenTrendingCategory } from "./WomenTrendingCategory/WomenTrendingCategory";
import { WomenBestOfBewakoof } from "./womenBestOfBewakoof/WomenBestOfBewakoof";
import { DontMissWomen } from "./dontMissWomen/DontMissWomen";
import { OurBestPicksWomen } from "./ourBestPicksWomen/OurBestPicksWomen";
import { WomenHeroBanner } from "./womenHeroBanner/WomenHeroBanner";

export default function Women() {
  return (
    <>
      <WomenHeroBanner />

      <WomenMiniCategory />

      <WomenTrendingCategory />

      <DontMissWomen />

      <WomenBestOfBewakoof />

      <OurBestPicksWomen />
    </>
  );
}
