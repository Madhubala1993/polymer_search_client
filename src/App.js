import { Box, Button, Card, Modal, Typography } from "@mui/material";
import { Switch, Route, useHistory } from "react-router-dom";
import { ContentPage } from "./ContentPage";
import { PopOver } from "./PopOver";
import { Home } from "./Home";
import { Filter } from "./Filter";
import { API } from "./global.js";
import { useEffect, useState } from "react";
import { Chart } from "./Chart";
import AddIcon from "@mui/icons-material/Add";
import { Sidebar } from "./Sidebar";

export default function App() {
  const [repoList, setRepoList] = useState([]);
  const [searchTag, setSearchTag] = useState([]);

  const getRepoList = () => {
    fetch(`${API}/repo`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setRepoList(data));
  };
  useEffect(getRepoList, []);

  const history = useHistory();
  return (
    <div>
      {/* <Button color="inherit" onClick={() => history.push("/")}>
        Home
      </Button>
      <Button color="inherit" onClick={() => history.push("/content")}>
        ContentPage
      </Button>
      <Button color="inherit" onClick={() => history.push("/popover")}>
        Popover
      </Button>
      <Button color="inherit" onClick={() => history.push("/filter")}>
        Filter
      </Button>
      <Button color="inherit" onClick={() => history.push("/chart")}>
        Chart
      </Button>
      <Button color="inherit" onClick={() => history.push("/sidebar")}>
        Sidebar
      </Button> */}

      <section className="router-container">
        <Switch>
          <Route exact path="/">
            <Home
              repoList={repoList}
              searchTag={searchTag}
              setSearchTag={setSearchTag}
            />
            ;
          </Route>

          <Route path="/content">
            <ContentPage repo={repoList} />
          </Route>
          <Route path="/popover">
            <PopOver />
          </Route>
          <Route path="/filter">
            <Filter
              repoList={repoList}
              searchTag={searchTag}
              setSearchTag={setSearchTag}
            />
          </Route>
          <Route path="/chart">
            <Chart repoList={repoList} />
          </Route>
          <Route path="/sidebar">
            <Sidebar
              repoList={repoList}
              searchTag={searchTag}
              setSearchTag={setSearchTag}
            />
          </Route>
        </Switch>
      </section>
    </div>
  );
}
