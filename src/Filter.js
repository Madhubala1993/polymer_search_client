export function Filter({ repoList, searchTag, setSearchTag }) {
  const service_names = repoList.map((repo) => repo.Service_name);
  const servicecounts = {};
  service_names.forEach((x) => {
    servicecounts[x] = (servicecounts[x] || 0) + 1;
  });
  var serviceResult = Object.entries(servicecounts);
  console.log(serviceResult);

  const language = repoList.map((repo) => repo.Language);
  const languageCounts = {};
  language.forEach((x) => {
    languageCounts[x] = (languageCounts[x] || 0) + 1;
  });
  var languageResult = Object.entries(languageCounts);

  const topics = repoList.map((repo) => repo.Topics);
  const newArr = Array.prototype.concat(...topics);
  const topicsCounts = {};
  newArr.forEach((x) => {
    topicsCounts[x] = (topicsCounts[x] || 0) + 1;
  });
  var topicsResult = Object.entries(topicsCounts);

  const stars = repoList.map((repo) => repo.Popularity.Stars);
  const starscounts = {};
  stars.forEach((x) => {
    starscounts[x] = (starscounts[x] || 0) + 1;
  });
  var starsResult = Object.entries(starscounts);

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
