import { Button } from "@mui/material";
import { useState } from "react";
import { PopOver } from "./PopOver";

export function Appbar({
  data,
  setData,
  search,
  setSearch,
  searchTag,
  setSearchTag,
}) {
  return (
    <div className="appbar-container">
      <div className="logo">
        <img
          className="aws-image"
          src="https://cloudastronautblog.files.wordpress.com/2017/10/aws_logo_smile_1200x630.png"
          alt="aws"
        />
        <p>Everything AWS</p>
      </div>
      <div className="page-control">
        <p sx={{ marginleft: "auto" }} onClick={() => setData("data")}>
          Data Presentation
        </p>
        <p onClick={() => setData("chart")}>Visualize</p>
      </div>

      <div className="search_container">
        <input
          className="header_search"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="appbar-buttons">
        <PopOver />
        <Button variant="contained">
          <img
            src="https://app.polymersearch.com/icons/gradient-logo.svg"
            alt=""
            onClick={() =>
              window.open(
                "https://www.polymersearch.com/?utm_source=aws?utm_source=Polymer%20B2C&aws_browser.csv&utm_medium=polymer_app&_gl=1*dj8ljr*_ga*MTQ2MDA0NDk5OS4xNjQ1NDk5NDYz*_ga_TM0Y9BW8XS*MTY0NjYzMTg3OS4zNC4xLjE2NDY2MzE4ODIuMA.."
              )
            }
          />
          Built with Polymer
        </Button>
      </div>
    </div>
  );
}
