import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../productCard/ProductDescriptionAccordion.css";
import IcDiscount from "./discount-1-2x-1625212811.webp";
import IcProduct from "./ic-prod-desc.svg";
import IcReturn from "./ic-return.svg";
import IcStar from "./ic-star-offer.svg";

export const ProductDescriptionAccordion = ({ productDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const styleObj = {
    color: "#606060",
    fontSize: "0.75rem",
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          border: "none",
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
          borderBottom: "0.2rem solid #f1f1f1",
        }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            border: "none",
            boxShadow: "none",
          }}
        >
          <div className="ProductDescriptionAccordionBox">
            <img
              className="ProductDescriptionAccordionImage"
              src={IcStar}
              alt="IcStar"
            />

            <div className="ProductDescriptionAccordionSummaryBox">
              <h5>Offers</h5>
              <p>Offers Save extra with 1 offer</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="ProductDescriptionAccordionBox">
            <img
              className="ProductDescriptionAccordionImage"
              src={IcDiscount}
              alt="IcDiscount"
            />
            <div className="ProductDescriptionAccordionDetails">
              <p>
                Get Rs.200 instant discount on your First Purchase above Rs.999.
                Coupon code -<span>NEW200</span>
              </p>
              <CopyToClipboard text="NEW200">
                <p className="ProductDescriptionAccordionDetailsClick">
                  Tap to Copy
                </p>
              </CopyToClipboard>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          border: "none",
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
          borderBottom: "0.2rem solid #f1f1f1",
        }}
      >
        <AccordionSummary
          expandIcon={expanded === "panel2" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            border: "none",
            boxShadow: "none",
          }}
        >
          <div className="ProductDescriptionAccordionBox">
            <img
              className="ProductDescriptionAccordionImage"
              src={IcProduct}
              alt="IcProduct"
            />
            <div className="ProductDescriptionAccordionSummaryBox">
              <h5>Product Description</h5>
              <p>Manufacture, Care and Fit</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <Typography
              dangerouslySetInnerHTML={{ __html: productDetails }}
              style={styleObj}
            ></Typography>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          border: "none",
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
          borderBottom: "0.2rem solid #f1f1f1",
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={expanded === "panel3" ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            border: "none",
            boxShadow: "none",
          }}
        >
          <div className="ProductDescriptionAccordionBox">
            <img
              className="ProductDescriptionAccordionImage"
              src={IcReturn}
              alt="IcReturn"
            />
            <div className="ProductDescriptionAccordionSummaryBox">
              <h5>15 DAY RETURNS</h5>
              <p>Know about return & exchange policy</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="ProductDescriptionAccordionDetails">
            Easy returns upto 15 days of delivery.
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
