$(() => {
  $("#logs-form").submit((e) => {
    e.preventDefault();
    run();
  });
});
const run = async () => {
  try {
    $("#loading").show();
    $("p").remove("#no-logs");
    $("p").remove("#loaded-logs");
    $("#loading").html(
      '<div class="spinner-border text-danger" role="status"></div>'
    );
    var date = new Date();
    var formatted = date.toISOString();
    var to = formatted.split(".")[0] + "+00:00";
    const result = await loadLogs("2023-01-01T00:05:37+00:00", to);
    const json = await result.json();
    var formatted_logs = [];
    for (const [key, value] of Object.entries(json)) {
      value.forEach((e) => {
        if (e.username == $("#user").val()) {
          var datetime = new Date(Number(key) * 1000).toLocaleString("en-US");
          formatted_logs.push(
            "[" + datetime + "] " + e.username + ": " + e.message
          );
        }
      });
    }
    $("#loading").hide();
    if (formatted_logs.length == 0) {
      $("#logs").append('<p id="no-logs">No logs.</p>');
    } else {
      formatted_logs.forEach((element) => {
        $("#logs").append('<p id="loaded-logs">' + element + "</p>");
      });
    }
  } catch (err) {
    console.log(err);
  }
};
