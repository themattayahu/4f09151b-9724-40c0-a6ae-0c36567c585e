var loadLogs = (username, from, to) => {
  let logs = null;
  let formatted_logs = [];
  $.ajax({
    url: "https://surskity.live/logs",
    type: "get",
    async: false,
    data: {
      from: from,
      to: to,
    },
    success: (data) => {
      logs = data;
    },
  });
  for (const [key, value] of Object.entries(logs)) {
    value.forEach((e) => {
      if (e.username == username) {
        var datetime = new Date(Number(key) * 1000).toLocaleString("en-US");
        formatted_logs.push(
          "[" + datetime + "] " + e.username + ": " + e.message
        );
      }
    });
  }
  return formatted_logs;
};
