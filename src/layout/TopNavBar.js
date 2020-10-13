import React from "react";
import {
  AppBar,
  IconButton,
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
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
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

          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>

          <IconButton color="inherit">
            <NotificationsIcon></NotificationsIcon>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon></AccountCircleIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
