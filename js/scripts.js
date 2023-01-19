$(() => {
  $("#logs-form").submit((e) => {
    e.preventDefault();
    var user = $("#user").val();
    var date = new Date();
    var formatted = date.toISOString();
    var to = formatted.split(".")[0] + "+00:00";
    var results = loadLogs(user, "2023-01-01T00:05:37+00:00", to);
    results.forEach((element) => {});
  });
});
