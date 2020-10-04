import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer } from "@material-ui/core";

import Routes from "../Routes";
import User from "../pages/Users/User";
import TopNavBar from "./TopNavBar";
import UserSideBar from "../pages/Users/UserSideBar";
import { Router } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: "rtl",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
  },
}));

export default function LayoutComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNavBar></TopNavBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />

        <UserSideBar className={classes.drawerContainer}></UserSideBar>
      </Drawer>
      <Toolbar />
      <main className={classes.content}>
        <Toolbar />
        <Routes />
        <User />
      </main>
    </div>
  );
}
