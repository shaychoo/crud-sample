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
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );

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
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </Button>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {data.hits.map((item) => (
            <ListItem button key={item.objectID}>
              <ListItemText primary={item.title}></ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </Fragment>
  );
};

export default User;
