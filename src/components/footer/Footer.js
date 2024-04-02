import React from "react";
import { useLocation } from "react-router-dom";
import "../footer/Footer.css";
import { SubFooter } from "./footerSub/SubFooter";
import { FooterTextComponent } from "./footerText/FooterTextComponent";

export const Footer = () => {
  const pagePath = useLocation();
  return (
    <>
      {}
      <footer>
        <SubFooter />
        {pagePath.pathname === "/" ? <FooterTextComponent /> : null}
      </footer>
    </>
  );
};
