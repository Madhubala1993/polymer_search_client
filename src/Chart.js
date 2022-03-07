import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

export function Chart({ repoList }) {
  const [item, setItem] = useState("Select");
  let dataArr = [];
  let range = [];
  if (item == "Language") {
    const language = repoList.map((repo) => repo.Language);
    const languageCounts = {};
    language.forEach((x) => {
      languageCounts[x] = (languageCounts[x] || 0) + 1;
    });

    Object.keys(languageCounts).map((key) => {
      dataArr.push(key);
      range.push(languageCounts[key]);
    });
  } else if (item == "Topics") {
    const topics = repoList.map((repo) => repo.Topics);
    const newArr = Array.prototype.concat(...topics);
    const topicsCounts = {};
    newArr.forEach((x) => {
      topicsCounts[x] = (topicsCounts[x] || 0) + 1;
    });
    var topicsResult = Object.entries(topicsCounts);
    Object.keys(topicsCounts).map((key) => {
      dataArr.push(key);
      range.push(topicsCounts[key]);
    });
  } else if (item == "License") {
    const license = repoList.map((repo) => repo.License_Name);
    const licenseCounts = {};
    license.forEach((x) => {
      licenseCounts[x] = (licenseCounts[x] || 0) + 1;
    });
    Object.keys(licenseCounts).map((key) => {
      dataArr.push(key);
      range.push(licenseCounts[key]);
    });
  } else if (item == "Stars") {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    const arr = ["0-100", "100-300", "300-1000", "1000-5000", "5000-10000"];
    let count = [count1, count2, count3, count4, count5];

    repoList.forEach((repo) => {
      let a = +repo.Popularity.Stars;
      if (a <= 100) count[0]++;
      else if (a > 100 && a <= 300) count[1]++;
      else if (a > 300 && a <= 1000) count[2]++;
      else if (a > 1000 && a <= 5000) count[3]++;
      else if (a > 5000 && a <= 10000) count[4]++;
    });
    dataArr = arr;
    range = count;
  } else if (item == "Forks") {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    const arr = ["0-100", "100-300", "300-1000", "1000-5000", "5000-10000"];
    let count = [count1, count2, count3, count4, count5];

    repoList.forEach((repo) => {
      let a = +repo.Popularity.Forks;
      if (a <= 100) count[0]++;
      else if (a > 100 && a <= 300) count[1]++;
      else if (a > 300 && a <= 1000) count[2]++;
      else if (a > 1000 && a <= 5000) count[3]++;
      else if (a > 5000 && a <= 10000) count[4]++;
    });
    dataArr = arr;
    range = count;
  } else if (item == "Watchers") {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    const arr = ["0-100", "100-300", "300-1000", "1000-5000", "5000-10000"];
    let count = [count1, count2, count3, count4, count5];

    repoList.forEach((repo) => {
      let a = +repo.Popularity.Watchers;
      if (a <= 100) count[0]++;
      else if (a > 100 && a <= 300) count[1]++;
      else if (a > 300 && a <= 1000) count[2]++;
      else if (a > 1000 && a <= 5000) count[3]++;
      else if (a > 5000 && a <= 10000) count[4]++;
    });
    dataArr = arr;
    range = count;
  } else if (item == "Has_wiki") {
    let count1 = 0;
    let count2 = 0;

    const arr = ["true", "false"];
    const count = [count1, count2];

    repoList.forEach((repo) => {
      let a = repo.Advanced_Details.Has_Wiki;
      if (a === "true") count[0]++;
      else if (a === "false") count[1]++;
    });
    dataArr = arr;
    range = count;
  }
  const data = {
    labels: dataArr,
    datasets: [
      {
        label: item,
        data: range,
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
        borderWidth: 0.5,
      },
    ],
  };
  const options = {
    indexAxis: "y",

    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const list = [
    "Select",
    "Language",
    "Topics",
    "License",
    "Stars",
    "Forks",
    "Watchers",
    "Has_wiki",
  ];
  const [value, setValue] = useState("Select");
  const handleChange = (e) => {
    setValue(e.target.value);
    setItem(e.target.value);
  };

  return (
    <div className="chart-container">
      <select value={value} onChange={handleChange}>
        {list.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <p>{`${value}`}</p>
      <div className="barchart-container">
        <MDBContainer>
          <Bar data={data} options={options} />
        </MDBContainer>
      </div>
    </div>
  );
}
