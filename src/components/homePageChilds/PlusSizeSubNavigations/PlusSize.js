import React from "react";
import { PlusSizeMiniCategory } from "./PlusSizeMiniCategory/PlusSizeMiniCategory";
import { BannerImagesPlusSize } from "./bannerImagesPlusSize/BannerImagesPlusSize";
import { HeroImagePlusSize } from "./heroImagePlusSize/HeroImagePlusSize";
import { ShopForMenWomen } from "./shopForMenWomen/ShopForMenWomen";

export const PlusSize = () => {
  return (
    <>
      <HeroImagePlusSize />

      <PlusSizeMiniCategory />

      <BannerImagesPlusSize />

      <ShopForMenWomen />
    </>
  );
};
