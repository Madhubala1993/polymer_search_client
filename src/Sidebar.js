import { ServiceName } from "./ServiceName";
import { Language } from "./Language";
import { Topics } from "./Topics";
import { Stars } from "./Stars";
import { HasWiki } from "./HasWiki";
import { Watchers } from "./Watchers";
import { Forks } from "./Forks";

export function Sidebar({ repoList, searchTag, setSearchTag }) {
  return (
    <div className="sidebar-container">
      <div sx={{ alignItems: "center" }} className="categories-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/VisualEditor_-_Icon_-_Underline-a.svg/768px-VisualEditor_-_Icon_-_Underline-a.svg.png"
          alt=""
          className="alpha"
        />
        <p>CATEGORIES</p>
      </div>
      <ServiceName
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
      <Language
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
      <Topics
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />

      <br />
      <br />
      <div sx={{ alignItems: "center" }} className="categories-container">
        <img
          src="https://st2.depositphotos.com/48171126/45347/v/950/depositphotos_453471916-stock-illustration-hashtag-icon-vector-hashtag-symbol.jpg?forcejpeg=true"
          alt=""
          className="alpha"
        />
        <p>NUMERICAL</p>
      </div>
      <Stars
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
      <Forks
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
      <Watchers
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />

      <br />
      <br />
      <div sx={{ alignItems: "center" }} className="categories-container">
        <img
          src="https://st2.depositphotos.com/48171126/45347/v/950/depositphotos_453471916-stock-illustration-hashtag-icon-vector-hashtag-symbol.jpg?forcejpeg=true"
          alt=""
          className="alpha"
        />
        <p>NUMERICAL</p>
      </div>
      <HasWiki
        repoList={repoList}
        searchTag={searchTag}
        setSearchTag={setSearchTag}
      />
    </div>
  );
}
