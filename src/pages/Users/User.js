import React, { Fragment, useState } from "react";
import { Button, CircularProgress, Grid } from "@material-ui/core";

import MyCard from "../../utils/material-ui/MyCard";
import { useDataApi } from "../../utils/useDataApi";

const User = () => {
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
              <MyCard
                avatar={user.name.substr(0, 1)}
                header={user.name}
                subheader={user.email}
                content={user.phone}
                more={user.website}
              ></MyCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default User;
