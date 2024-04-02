import React from "react";
import { MenMiniCategory } from "../MenSubNavigations/menMiniCategory/MenMiniCategory";
import { MenBestOfBewakoof } from "./menBestOfBewakoof/MenBestOfBewakoof";
import { MenTrendingCategory } from "./menTrendingCategory/MenTrendingCategory";
import { DontMissMen } from "./dontMissMen/DontMissMen";
import { OurBestPicksMen } from "./ourBestPicksMen/OurBestPicksMen";
import { MenHeroBanner } from "./menHeroBanner/MenHeroBanner";

export default function Men() {
  return (
    <>
      <MenHeroBanner />

      <MenMiniCategory />

      <MenTrendingCategory />

      <DontMissMen />

      <MenBestOfBewakoof />

      <OurBestPicksMen />
    </>
  );
}
