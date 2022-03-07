import { Box, Card, Modal, Typography } from "@mui/material";
import { Filter } from "./Filter";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export function Forks({ repoList, searchTag, setSearchTag }) {
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
          <Filter5
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
          # Forks
        </Typography>
        <Typography
          sx={{ marginLeft: "auto", fontSize: "14px" }}
          color="text.secondary"
        >
          5
        </Typography>
        <Typography color="text.secondary">
          <AddIcon />
        </Typography>
      </Card>
    </div>
  );
}
function Filter5({ repoList, searchTag, setSearchTag }) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  const arr = ["0-100", "100-300", "300-1000", "1000-5000", "5000-10000"];
  const count = [count1, count2, count3, count4, count5];

  repoList.forEach((repo) => {
    let a = +repo.Popularity.Forks;
    if (a <= 100) count[0]++;
    else if (a > 100 && a <= 300) count[1]++;
    else if (a > 300 && a <= 1000) count[2]++;
    else if (a > 1000 && a <= 5000) count[3]++;
    else if (a > 5000 && a <= 10000) count[4]++;
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
