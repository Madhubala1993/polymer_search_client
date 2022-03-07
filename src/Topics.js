import { Box, Card, Modal, Typography } from "@mui/material";
import { Filter } from "./Filter";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export function Topics({ repoList, searchTag, setSearchTag }) {
  const topics = repoList.map((repo) => repo.Topics);
  const newArr = Array.prototype.concat(...topics);
  const topicsCounts = {};
  newArr.forEach((x) => {
    topicsCounts[x] = (topicsCounts[x] || 0) + 1;
  });
  var topicsResult = Object.entries(topicsCounts);

  const style = {
    position: "absolute",
    top: "45%",
    left: "25%",
    transform: "translate(-30%, -70%)",
    width: "600px",
    boxShadow: 24,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Filter3
            repoList={repoList}
            searchTag={searchTag}
            setSearchTag={setSearchTag}
          />
        </Box>
      </Modal>

      <Card className="categories-container" onClick={handleOpen}>
        <Typography
          sx={{ marginLeft: "15px", fontSize: "14px" }}
          color="text.secondary"
        >
          Topics
        </Typography>
        <Typography
          sx={{ marginLeft: "auto", fontSize: "14px" }}
          color="text.secondary"
        >
          {topicsResult.length}
        </Typography>
        <Typography color="text.secondary">
          <AddIcon />
        </Typography>
      </Card>
    </div>
  );
}

function Filter3({ repoList, searchTag, setSearchTag }) {
  const topics = repoList.map((repo) => repo.Topics);
  const newArr = Array.prototype.concat(...topics);
  const topicsCounts = {};
  newArr.forEach((x) => {
    topicsCounts[x] = (topicsCounts[x] || 0) + 1;
  });
  var topicsResult = Object.entries(topicsCounts);

  return (
    <div className="filter-container">
      <div className="search-container">
        <input
          label="Search"
          placeholder=" 🔍    Search"
          className="searchbar"
        />
      </div>
      <div className="filter-values">
        {topicsResult.map((e) => (
          <div
            className="filter-tag"
            onClick={() => setSearchTag([...searchTag, e[0]])}
          >
            <p className="color-green">
              {e[0]} <strong>{e[1]}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
