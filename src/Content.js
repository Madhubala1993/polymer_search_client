import { Modal } from "@mui/material";
import Card from "@mui/material/Card";
import { useRef, useState } from "react";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";
import { ContentPage } from "./ContentPage";

export function Content({ repoList }) {
  const handleClick = () => {
    window.open(repoList.Github_Repo);
  };
  const [alert, setAlert] = useState(false);
  const textAreaRef = useRef(null);
  const copyClipboard = (link) => {
    navigator.clipboard.writeText(link);
    setAlert(true);
    window.setTimeout(() => {
      setAlert(false);
    }, 1000);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1000px",
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
          <ContentPage repo={repoList} />
        </Box>
      </Modal>
      <Card className="card_container" onClick={handleOpen}>
        <div sx={{ fontSize: "5px" }}>
          <p>
            <strong>Stars</strong>
            <span className="color-blue">{repoList.Popularity.Stars}</span>
          </p>
          <hr />
          <p className="name_link" onClick={handleClick}>
            {repoList.name}
          </p>
          <h6 style={{ fontSize: "13px" }}>{repoList.Description}</h6>
          <div className="links">
            <div className="github">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/512px-External_link_font_awesome.svg.png"
                className="github_logo"
                onClick={handleClick}
              />

              <div className="github-link">
                <p>Github Repo</p>
              </div>
            </div>
            <div className="github">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyOXSTUC-3nt0p6CpFr65mmA4FFuoAcmhrLgHRAXuBGZEvsNTbWj1FEqLl6Sy7y_Yk1g&usqp=CAU"
                className="github_logo"
                onClick={() => {
                  copyClipboard(`${repoList.share}`);
                }}
              />

              <p
                className="github-link"
                onClick={() => {
                  copyClipboard(`${repoList.share}`);
                }}
              >
                <div>Share</div>
              </p>
              {alert && (
                <div className="alertBox">
                  <Alert severity="success">Link Copied!</Alert>
                </div>
              )}
            </div>
          </div>

          <hr />
          <div className="details">
            <div className="values">
              <p>
                <b>Service name</b>
              </p>
              <p>
                <b>Owner</b>
              </p>
            </div>
            <div>
              <p className="color-green">{repoList.Service_name}</p>
              <p className="color-blue">{repoList.Owner}</p>
            </div>
          </div>
          <hr />
          <div className="spec">
            <p>
              <strong>Stars</strong>
              <br />
              <p className="color-blue"> {repoList.Popularity.Stars}</p>
            </p>
            <p>
              <strong>Search Keywords</strong>
              <br />
              <p className="color-pink">{repoList.Search_keywords}</p>
            </p>
            <p>
              <strong>Language</strong> <br />
              <p className="color-pink">{repoList.Language}</p>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
