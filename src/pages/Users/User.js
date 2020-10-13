import React, { Fragment, useState } from "react";
import clsx from "clsx";

import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useDataApi } from "../../utils/useDataApi";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 30,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const User = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [query, setQuery] = useState("");
  const [
    { data, isLoading, isError },
    doFetch,
  ] = useDataApi("https://jsonplaceholder.typicode.com/users/", [{ name: "" }]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button
        type="button"
        onClick={() =>
          doFetch(`https://jsonplaceholder.typicode.com/users/${query}`)
        }
      >
        Search
      </Button>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container>
          {(data.map === undefined ? [data] : data).map((user) => (
            <Grid item key={user.id} xs={4}>
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {user.name.substr(0, 1)}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={user.name}
                  subheader={user.email}
                />
                <CardMedia
                  className={classes.media}
                  image="https://source.unsplash.com/random"
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.phone}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Website:</Typography>
                    <Typography paragraph>{user.website}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default User;
