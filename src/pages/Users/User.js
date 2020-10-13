import React, { Fragment, useState } from "react";
import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useDataApi } from "../../utils/useDataApi";

const User = () => {
  const [query, setQuery] = useState("");
  const [
    { data, isLoading, isError },
    doFetch,
  ] = useDataApi("https://jsonplaceholder.typicode.com/users/", [{}]);

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
        <List>
          {(data.map === undefined ? [data] : data).map((item) => (
            <ListItem button key={item.id}>
              <ListItemText primary={item.name}></ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Fragment>
  );
};

export default User;
