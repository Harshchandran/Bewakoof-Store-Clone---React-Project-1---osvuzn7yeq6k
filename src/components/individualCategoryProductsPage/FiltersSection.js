import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "./FilterSection.css";

const accordionStyle = {
  marginBottom: 0,
};

export const FiltersSection = ({
  setFiltersApplied,
  filterApplied,
  UpdateFiltersOnData,
  setSortByType,
  sortByPriceLowToHigh,
  sortByPriceHighToLow,
  setFilterClearButton,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleFilterClick = (data) => {
    const isFilterApplied = Object.keys(filterApplied).some((key) => {
      return filterApplied[key] === data[key];
    });

    if (isFilterApplied) {
      const updatedFilters = Object.keys(filterApplied).reduce((acc, key) => {
        if (filterApplied[key] !== data[key]) {
          acc[key] = filterApplied[key];
        }
        return acc;
      }, {});
      setFiltersApplied(updatedFilters);
    } else {
      setFiltersApplied({ ...filterApplied, ...data });
      setFilterClearButton(true);
    }
  };

  useEffect(() => {
    UpdateFiltersOnData();
  }, [filterApplied]);

  const isFilterApplied = (data) => {
    return Object.keys(filterApplied).some((key) => {
      return filterApplied[key] === data[key];
    });
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      {/* <div>{JSON.stringify(filterApplied)}</div> */}
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            style={{ fontSize: "0.75rem", color: "#333333" }}
            className="accordionSummaryTitle"
          >
            Sizes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="accordionChildren"
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ size: "S" }) ? "#42a2a2" : "#737373",
            }}
            onClick={() => handleFilterClick({ size: "S" })}
          >
            S
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ size: "M" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ size: "M" })}
          >
            M
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ size: "L" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ size: "L" })}
          >
            L
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ size: "XL" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ size: "XL" })}
          >
            XL
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ size: "XXL" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ size: "XXL" })}
          >
            XXL
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            style={{ fontSize: "0.75rem", color: "#333333" }}
            className="accordionSummaryTitle"
          >
            Color
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "0.8rem",
            flexWrap: "wrap",
          }}
        >
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "RED" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "red",
              }}
              onClick={() => handleFilterClick({ color: "RED" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "BLUE" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "blue",
              }}
              onClick={() => handleFilterClick({ color: "BLUE" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "BROWN" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "brown",
              }}
              onClick={() => handleFilterClick({ color: "BROWN" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "BLACK" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "black",
              }}
              onClick={() => handleFilterClick({ color: "BLACK" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "WHITE" })
                  ? "0.2rem solid #42a2a2"
                  : "0.1rem solid #000",
                background: "white",
              }}
              onClick={() => handleFilterClick({ color: "WHITE" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "GREY" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "grey",
              }}
              onClick={() => handleFilterClick({ color: "GREY" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "YELLOW" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "yellow",
              }}
              onClick={() => handleFilterClick({ color: "YELLOW" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "GREEN" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "green",
              }}
              onClick={() => handleFilterClick({ color: "GREEN" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "PINK" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "pink",
              }}
              onClick={() => handleFilterClick({ color: "PINK" })}
            ></div>
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            <div
              className="accordianFilterColorBox"
              style={{
                border: isFilterApplied({ color: "PURPLE" })
                  ? "0.2rem solid #42a2a2"
                  : "none",
                background: "violet",
              }}
              onClick={() => handleFilterClick({ color: "PURPLE" })}
            ></div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography
            style={{ fontSize: "0.75rem", color: "#333333" }}
            className="accordionSummaryTitle"
          >
            Sort By
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ sellerTag: "trending" })
                ? "#42a2a2"
                : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ sellerTag: "trending" })}
          >
            Popular
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ sellerTag: "new arrival" })
                ? "#42a2a2"
                : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ sellerTag: "new arrival" })}
          >
            New
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
            onClick={() => {
              sortByPriceHighToLow();
              setSortByType("Price : Low to High");
            }}
          >
            Price : High to Low
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
            onClick={() => {
              sortByPriceLowToHigh();
              setSortByType("Price : Low to High");
            }}
          >
            Price : Low to High
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography
            style={{ fontSize: "0.75rem", color: "#333333" }}
            className="accordionSummaryTitle"
          >
            Ratings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            className="accordionChildren"
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ ratings: "4" }) ? "#42a2a2" : " #737373",
            }}
            onClick={() => handleFilterClick({ ratings: "4" })}
          >
            4 and above
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ ratings: "3" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ ratings: "3" })}
          >
            3 and above
          </Typography>
          <Typography
            style={{
              fontSize: "0.75rem",
              color: isFilterApplied({ ratings: "2" }) ? "#42a2a2" : "#737373",
            }}
            className="accordionChildren"
            onClick={() => handleFilterClick({ ratings: "2" })}
          >
            2 and above
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Gender
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Men
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Women
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Category
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Hoodies
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            T-Shirt
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Dress
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Sweatshirt
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Top
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Sweater
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Brand
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Bewakoof®
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Bewakoof Heavy Duty® 1.0
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Campus Sutra
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Rigo
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Device Brand
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Bewakoof®
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Bewakoof Heavy Duty® 1.0
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Campus Sutra
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Rigo
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Design
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Graphic Print
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Solid
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Typography
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Color Block
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Aop
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Printed
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Textured
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Striped
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Camouflage
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Marble Print
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Fit
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Oversized Fit
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Regular Fit
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Super Loose Fit
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Slim Fit
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Sleeve
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Full Sleeve
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Half Sleeve
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Sleeveless
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Neck
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Hooded
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Round Neck
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
};
