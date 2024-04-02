import React from "react";
import "../footer/Footer.css";
import { SubFooter } from "./footerSub/SubFooter";
import {
  FooterText,
  FooterTextComponent,
} from "./footerText/FooterTextComponent";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {}
      <footer>
        <SubFooter />
        <FooterTextComponent />
      </footer>
    </>
  );
};
