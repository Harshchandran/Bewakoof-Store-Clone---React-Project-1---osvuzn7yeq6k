import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import React from "react";
import Men from "./Circle-icon-men.webp";
import Women from "./Circle-icon-women.webp";
import "./DrawerComponent.css";
import Hamburger from "./hamburger.svg";
import Box from "@mui/material/Box";

export const DrawerComponent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="navBarDrawerContainer">
        <img onClick={toggleDrawer(true)} src={Hamburger} alt="HamburgerMenu" />
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            style={{
              width: "100%",
              maxWidth: 360,
              backgroundColor: "background.paper",
            }}
          >
            <List
              subheader={
                <ListSubheader
                  component="div"
                  style={{
                    color: "black",
                    fontSize: "0.88rem",
                    fontWeight: 900,
                  }}
                >
                  Welcome Guest
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "0.8rem",
                    color: "#757575",
                    fontWeight: "600",
                  }}
                  primary="Login / Sign Up"
                />
              </ListItem>
            </List>
            <Divider />

            <List
              subheader={
                <ListSubheader
                  component="div"
                  style={{
                    color: "#cacaca",
                    fontWeight: 600,
                    fontSize: "0.688rem",
                  }}
                  // className="navBarSubHeader"
                >
                  SHOP IN
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="Men" className="drawerListItemText" />
                <ListItemIcon>
                  <img className="navBarMenuImage" src={Men} alt="Men" />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  style={{
                    color: "black",
                    fontWeight: 600,
                    fontSize: "0.688rem",
                  }}
                  primary="Women"
                />
                <ListItemIcon>
                  <img className="navBarMenuImage" src={Women} alt="Women" />
                </ListItemIcon>
              </ListItem>
            </List>

            <List
              subheader={
                <ListSubheader
                  component="div"
                  style={{
                    color: "#cacaca",
                    fontWeight: 600,
                    fontSize: "0.688rem",
                  }}
                  // className="navBarSubHeader"
                >
                  CONTACT US
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="Help & Support" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Feedback & Suggestions" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Become a Seller" />
              </ListItem>
            </List>

            <List
              subheader={
                <ListSubheader
                  component="div"
                  style={{
                    color: "#cacaca",
                    fontWeight: 600,
                    fontSize: "0.688rem",
                  }}
                  // className="navBarSubHeader"
                >
                  ABOUT US
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText primary="Our Story" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Fanbook" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Blog" />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemText primary="Login" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
