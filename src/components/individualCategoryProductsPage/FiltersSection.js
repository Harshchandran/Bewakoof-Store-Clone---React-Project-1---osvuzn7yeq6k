import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import "./FilterSection.css";

export const FiltersSection = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
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
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Sizes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            XS
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            S
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            M
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            L
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            XL
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            2XL
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            3XL
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            4XL
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            5XL
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            6XL
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
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Ratings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            4 and above
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            3 and above
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            2 and above
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography
            style={{ fontSize: "0.875rem" }}
            className="accordionSummaryTitle"
          >
            Sort By
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Popular
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            New
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Price : High to Low
          </Typography>
          <Typography
            style={{ fontSize: "0.75rem" }}
            className="accordionChildren"
          >
            Price : Low to HighFit
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
