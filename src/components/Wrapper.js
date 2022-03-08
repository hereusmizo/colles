import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  SwipeableDrawer,
  Container,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import getColor from "./getColor";
import project from "./project";
import Footer from "./Footer";
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hideOnMobile: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation().pathname;

  const MENU_ITEM = [
    {
      path: "/",
      name: "Home",
      show: true,
    },
    // {
    //   path: "/features",
    //   name: "Features",
    //   show: true,
    // },
    {
      path: "/about",
      name: "About Us",
      show: true,
    },
    {
      path: "/contact",
      name: "Contact Us",
      show: true,
    },
    {
      path: "/pricing",
      name: "Pricing",
      show: true,
    },
    {
      path: "/privacy",
      name: "Privacy Policy",
      show: true,
    },
    {
      path: "/refund-policy",
      name: "Refund Policy",
      show: true,
    },
    {
      path: "/terms-and-conditions",
      name: "Terms & Conditions",
      show: true,
    },
  ];

  const renderMenuItem = () => {
    return MENU_ITEM.filter((item) => item.show).map((item) => (
      <ListItem
        key={item.path}
        style={{
          backgroundColor:
            item.path === "/"
              ? location === "/" && "#fff"
              : location.includes(item.path) && "#fff",
          borderTopLeftRadius: 18,
          borderBottomLeftRadius: 18,
        }}
        button
        onClick={() => {
          setOpenDrawer(false);
        }}
        component={Link}
        to={item.path}
      >
        <ListItemText
          primary={
            <Typography
              color="primary"
              style={{
                fontWeight: 500,
                color:
                  item.path === "/"
                    ? location === "/"
                      ? "#222"
                      : "#fff"
                    : location.includes(item.path)
                    ? "#222"
                    : "#fff",
              }}
            >
              {item.name}
            </Typography>
          }
        />
      </ListItem>
    ));
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          zIndex: 2,
          backgroundColor: "#fff",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
            onClick={(e) => {
              setOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                alt={project.name}
                src="/logo512.png"
                style={{
                  objectFit: "contain",
                  height: 50,
                  width: 50,
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                }}
              />{" "}
              <Typography
                style={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: 16,
                  marginLeft: 10,
                }}
              >
                {project.name}
              </Typography>
            </div>
          </Link>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {MENU_ITEM.map((item) => {
              return (
                <Link
                  className={classes.hideOnMobile}
                  key={item.path}
                  title="Home"
                  to={item.path}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    marginLeft: 25,
                    color: "#09478e",
                    textTransform: "uppercase",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} />
        <List
          dense
          style={{
            background: getColor.primary,
            flexGrow: 1,
            paddingTop: 20,
            height: "100%",
          }}
        >
          {renderMenuItem()}
        </List>
      </SwipeableDrawer>
      <Container
        maxWidth="xl"
        style={{ flexGrow: 1, paddingTop: 90, minHeight: 600 }}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Wrapper;
