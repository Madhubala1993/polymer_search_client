import { Box, Card, Modal, Typography } from "@mui/material";
import { Filter } from "./Filter";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export function HasWiki({ repoList, searchTag, setSearchTag }) {
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
          <Filter6
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
          Has Wiki
        </Typography>
        <Typography
          sx={{ marginLeft: "auto", fontSize: "14px" }}
          color="text.secondary"
        >
          2
        </Typography>
        <Typography color="text.secondary">
          <AddIcon />
        </Typography>
      </Card>
    </div>
  );
}

function Filter6({ repoList, searchTag, setSearchTag }) {
  let count1 = 0;
  let count2 = 0;

  const arr = ["true", "false"];
  const count = [count1, count2];

  repoList.forEach((repo) => {
    let a = repo.Advanced_Details.Has_Wiki;
    console.log(a);
    if (a === "true") count[0]++;
    else if (a === "false") count[1]++;
  });

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
        {arr.map((e, i) => (
          <p
            className="color-green"
            onClick={() => setSearchTag([...searchTag, e])}
          >
            {e} <strong>{count[i]}</strong>
          </p>
        ))}
      </div>
    </div>
  );
}
