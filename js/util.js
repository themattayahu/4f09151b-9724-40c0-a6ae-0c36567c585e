var loadLogs = (from, to) => {
  return fetch("https://surskity.live/logs?from=" + from + "&to=" + to, {
    mode: "cors",
  });
};
