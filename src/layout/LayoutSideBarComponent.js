import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer } from "@material-ui/core";

import User from "../pages/Users/User";
import TopNavBar from "./TopNavBar";
import UserSideBar from "../pages/Users/UserSideBar";
import { useStyles } from "./drawerWidth";

export default function LayoutSideBarComponent(props) {
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
        {props.children}
        {/* <Routes /> */}
        <User />
      </main>
    </div>
  );
}
