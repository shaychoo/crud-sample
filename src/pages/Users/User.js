import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";

function User() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("redux");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const result = await axios(url);
      setData(result.data);
      setisLoading(false);
    };

    fetchData();
  }, [url]);

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
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </Button>

      {isLoading ? (
        <div>Loading ...</div>
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
}

export default User;
