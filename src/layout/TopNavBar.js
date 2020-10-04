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
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            iLearn
          </Typography>

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
