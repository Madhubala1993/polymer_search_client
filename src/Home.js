import { Notification } from "./Notification";
import { Appbar } from "./Appbar";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Button } from "@mui/material";
import { useState } from "react";
import { Chart } from "./Chart";

export function Home({ repoList, searchTag, setSearchTag }) {
  const [data, setData] = useState("data");
  const [search, setSearch] = useState("");
  let uniqueSet = [...new Set(searchTag)];

  let display = [];
  let listItems = [];

  const searchActions = (item, key) => {
    if (item.name.toLowerCase().includes(key.toLowerCase())) display.push(item);
    else if (item.Service_name.toLowerCase().includes(key.toLowerCase()))
      display.push(item);
    else if (item.Language.toLowerCase().includes(key.toLowerCase()))
      display.push(item);
    else if (
      item.Advanced_Details.Has_Wiki.toLowerCase().includes(key.toLowerCase())
    )
      display.push(item);
    else if (
      key === "0-100" ||
      "100-300" ||
      "300-1000" ||
      "1000-5000" ||
      "5000-10000"
    ) {
      if (key === "0-100" && item.Popularity.Stars <= 100) display.push(item);
      if (
        key === "100-300" &&
        item.Popularity.Stars > 100 &&
        item.Popularity.Stars <= 300
      )
        display.push(item);
      if (
        key === "300-1000" &&
        item.Popularity.Stars > 300 &&
        item.Popularity.Stars <= 1000
      )
        display.push(item);
      if (
        key === "1000-5000" &&
        item.Popularity.Stars > 1000 &&
        item.Popularity.Stars <= 5000
      )
        display.push(item);
      if (
        key === "5000-10000" &&
        item.Popularity.Stars > 5000 &&
        item.Popularity.Stars <= 10000
      )
        display.push(item);
    } else {
      item.Topics.map((ele) => {
        if (ele.toLowerCase().includes(key.toLowerCase())) display.push(item);
      });
    }
  };

  if (uniqueSet.length === 0 && search === "") {
    repoList.map((item) => display.push(item));
  } else if (uniqueSet != 0 || search != 0) {
    if (uniqueSet != 0) {
      for (let i = 0; i < uniqueSet.length; i++) {
        repoList.filter((item) => {
          searchActions(item, uniqueSet[i]);
        });
      }
    }
    if (search != 0) {
      listItems = repoList.filter((item) => {
        searchActions(item, search);
      });
    }
  }

  let body = [...new Set(display)];

  let count = body.length;

  return (
    <div className="App">
      <Notification />
      <Appbar
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
      <div className="page-container">
        <Sidebar
          repoList={repoList}
          searchTag={searchTag}
          setSearchTag={setSearchTag}
        />
        <div className="container">
          {data == "data" ? (
            <div>
              <Tags
                searchTag={searchTag}
                setSearchTag={setSearchTag}
                search={search}
                setSearch={setSearch}
              />
              <p className="count">Count : {count}</p>

              {repoList ? (
                <div className="aws-cards-list">
                  {body.map((item) => (
                    <Content repoList={item} />
                  ))}
                </div>
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          ) : (
            <Chart repoList={repoList} />
          )}
        </div>
      </div>
    </div>
  );
}

function Tags({ searchTag, setSearchTag, search, setSearch }) {
  return (
    <div className="github">
      <div
        className="tags-container"
        onChange={(event) => setSearchTag([...searchTag, event.target.value])}
      >
        <p className="tags"> Tags : </p>

        {searchTag.map((e) => (
          <p className="color-green">{e}</p>
        ))}
      </div>

      <Button
        variant="contained"
        onClick={() => setSearchTag([])}
        className="clearButton"
        sx={{ width: "20px", height: "25px", marginTop: "30px" }}
      >
        Clear
      </Button>
    </div>
  );
}
