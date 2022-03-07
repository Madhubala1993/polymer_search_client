import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import { useState } from "react";

export function PopOver() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        🔍 More sites
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div
          className="popover-item"
          onClick={() => window.open("https://flixgem.com/?utm_source=aws")}
        >
          <img
            className="logo-pic"
            src="https://raw.githubusercontent.com/PolymerSearch/polymersearch.github.io/main/public-sites/flixgem-icon.png"
            alt=""
          />
          <div className="popover-item-content">
            <h5>FlixGem</h5>
            <h5>The best startup advice from Y Combinator</h5>
          </div>
        </div>
        <div
          className="popover-item"
          onClick={() => window.open("https://ycadvice.com/?utm_source=aws")}
        >
          <img
            className="logo-pic"
            src="https://raw.githubusercontent.com/PolymerSearch/polymersearch.github.io/main/public-sites/YCA.svg"
            alt=""
          />
          <div className="popover-item-content">
            <h5>YCAdvice</h5>
            <h5>The best startup advice from Y Combinator</h5>
          </div>
        </div>
        <div
          className="popover-item"
          onClick={() =>
            window.open(
              "https://sheethacks.com/?utm_source=aws&_gl=1%2aw7h89m%2a_ga%2aMTQ2MDA0NDk5OS4xNjQ1NDk5NDYz%2a_ga_TM0Y9BW8XS%2aMTY0NTg2MzQ3OS4xOS4xLjE2NDU4NjQ2NzkuMA.."
            )
          }
        >
          <img
            className="logo-pic"
            src="https://raw.githubusercontent.com/PolymerSearch/polymersearch.github.io/main/public-sites/sheethacks-logo.png"
            alt=""
          />
          <div className="popover-item-content">
            <h5>SheetHacks</h5>
            <h5>
              Discover the best tips and tricks for Google sheets and Excel
            </h5>
          </div>
        </div>
        <div
          className="popover-item"
          onClick={() =>
            window.open("https://interviewgeni.us/?utm_source=aws")
          }
        >
          <img
            className="logo-pic"
            src="https://raw.githubusercontent.com/PolymerSearch/polymersearch.github.io/main/public-sites/lightbulb.svg"
            alt=""
          />
          <div className="popover-item-content">
            <h5>InterviewGenius</h5>
            <h5>Master your tech interview</h5>
          </div>
        </div>
        <div
          className="popover-item"
          onClick={() =>
            window.open(
              "https://app.polymersearch.com/discover/github-awesome?utm_source=aws"
            )
          }
        >
          <img
            className="logo-pic"
            src="https://app.polymersearch.com/icons/gradient-logo.svg"
            alt=""
          />
          <div className="popover-item-content">
            <h5>Github Awesome</h5>
            <h5>Search and discover every awesome list on Github</h5>
          </div>
        </div>
      </Popover>
    </div>
  );
}
