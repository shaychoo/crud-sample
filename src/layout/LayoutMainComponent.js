import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import TopNavBar from "./TopNavBar";

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
  },
}));

export default function LayoutMainComponent(props) {
  const classes = useStyles();
  console.log("root", classes.root);
  return (
    <div className={classes.root}>
      <TopNavBar></TopNavBar>
      <Toolbar />
      <main className={classes.content}>
        {/* <Toolbar /> */}
        {props.children}
      </main>
    </div>
  );
}
