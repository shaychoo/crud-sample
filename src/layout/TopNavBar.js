import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // direction: "rtl",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function TopNavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            iLearn
          </Typography>

          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about">About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/users">Users</Link>
          </Button>

          <Button color="inherit">
            <NotificationsIcon></NotificationsIcon>
          </Button>
          <Button color="inherit">
            <AccountCircleIcon></AccountCircleIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
