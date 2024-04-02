import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import React, { useEffect, useState } from "react";
import Men from "./Circle-icon-men.webp";
import Women from "./Circle-icon-women.webp";
import "./DrawerComponent.css";
import Hamburger from "./hamburger.svg";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const DrawerComponent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setUserName(userData.name);
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    localStorage.removeItem("cartItemsNumber");
    // Navigate("/login/email");
    window.location.href = "/login";
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
                  {userName === "" ? "Welcome Guest" : userName}
                </ListSubheader>
              }
            >
              <ListItem>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: "0.8rem",
                      color: "#757575",
                      fontWeight: "600",
                    }}
                    primary="Login / Sign Up"
                  />
                </Link>
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
                >
                  SHOP IN
                </ListSubheader>
              }
            >
              <ListItem>
                <Link
                  to="/productPage"
                  className="HamburgerNavigationMenWomen"
                  state={{
                    filter: {
                      gender: "Men",
                    },
                  }}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary="Men" className="drawerListItemText" />
                  <ListItemIcon>
                    <img className="navBarMenuImage" src={Men} alt="Men" />
                  </ListItemIcon>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/productPage"
                  state={{
                    filter: {
                      gender: "Women",
                    },
                  }}
                  className="HamburgerNavigationMenWomen"
                  onClick={() => setOpen(false)}
                >
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
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  to="/orders"
                  className="HamburgerNavigationMenWomen"
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    style={{
                      color: "black",
                      fontWeight: 600,
                      fontSize: "0.688rem",
                    }}
                    primary="My Orders"
                  />
                </Link>
              </ListItem>
            </List>

            <List>
              <ListItem>
                <Link to="/login" onClick={() => setOpen(false)}>
                  {userName === "" ? (
                    <ListItemText primary="Login" />
                  ) : (
                    <ListItemText onClick={Logout} primary="Logout" />
                  )}
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
};
