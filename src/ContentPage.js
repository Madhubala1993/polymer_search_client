import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

export function ContentPage({ repo }) {
  const handleClick = () => {
    window.open(repo.Github_Repo);
  };
  const [alert, setAlert] = useState(false);
  const copyClipboard = (link) => {
    navigator.clipboard.writeText(link);
    setAlert(true);
    window.setTimeout(() => {
      setAlert(false);
    }, 1000);
  };

  return (
    <div>
      <div className="content-container">
        <div className="heading">
          <Box
            variant="text"
            sx={{ fontSize: "30px", color: "black", justifyContent: "center" }}
          >
            {repo.name}
          </Box>
        </div>
        <div className="card-container">
          <div className="github">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/512px-External_link_font_awesome.svg.png"
              className="github_logo"
              onClick={handleClick}
            />

            <div className="github-link">
              <p onClick={handleClick}>{repo.name}</p>
            </div>
          </div>
          <div className="description">
            <b>Description :</b>

            <h6>⚡{repo.Description}</h6>
          </div>
          <div className="links">
            <div className="github">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/External_link_font_awesome.svg/512px-External_link_font_awesome.svg.png"
                className="github_logo"
                onClick={handleClick}
              />

              <div className="github-link">
                <p onClick={handleClick}>Github Repo</p>
              </div>
            </div>
            <div className="github">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyOXSTUC-3nt0p6CpFr65mmA4FFuoAcmhrLgHRAXuBGZEvsNTbWj1FEqLl6Sy7y_Yk1g&usqp=CAU"
                className="github_logo"
                onClick={() => {
                  copyClipboard(`${repo.share}`);
                }}
              />

              <p
                className="github-link"
                onClick={() => {
                  copyClipboard(`${repo.share}`);
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
          <br />

          <div className="block">
            <h5>Popularity</h5>
            <div className="spec">
              <p>
                Stars
                <br />
                <p className="color-blue"> {repo.Popularity.Stars}</p>
              </p>
              <p>
                Forks
                <br />
                <p className="color-pink">{repo.Popularity.Forks}</p>
              </p>
              <p>
                Watchers <br />
                <p className="color-green">{repo.Popularity.Watchers}</p>
              </p>
            </div>
          </div>
          <br />
          <div className="block">
            <h5>Stats</h5>
            <div className="spec">
              <p>
                Commits
                <br />
                <p className="color-green"> {repo.Stats.Commits}</p>
              </p>
              <p>
                Contributors
                <br />
                <p className="color-yellow">{repo.Stats.Contributors}</p>
              </p>
              <p>
                Open Issues <br />
                <p className="color-blue">{repo.Stats.Open_Issues}</p>
              </p>
              <p>
                Last Updated <br />
                <p className="color-pink">{repo.Last_Updated}</p>
              </p>
              <p>
                Created At <br />
                <p className="color-pink">{repo.Created_At}</p>
              </p>
            </div>
          </div>
          <br />
          <div className="block">
            <h5>Advanced Details</h5>
            <div className="spec">
              <p>
                Has Wiki
                <br />
                <p className="color-yellow">{repo.Advanced_Details.Has_Wiki}</p>
              </p>
              <p>
                License Name
                <br />
                <p className="color-pink">{repo.License_Name}</p>
              </p>
              <p>
                Topics <br />
                <p className="color-pink">{repo.Topics}</p>
              </p>
              <p>
                Owner Type <br />
                <p className="color-pink">{repo.Owner_Type}</p>
              </p>
              <p>
                Is Fork <br />
                <p className="color-pink">{repo.Is_Fork}</p>
              </p>
            </div>
          </div>
          <br />
          <div className="block">
            <h5>Repository Clock</h5>
            <div className="spec">
              <p>
                Last Updates
                <br />
                <p className="color-blue"> {repo.Last_Updated}</p>
              </p>
              <p>
                Created At
                <br />
                <p className="color-pink">{repo.Created_At}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
