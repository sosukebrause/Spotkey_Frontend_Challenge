$(document).ready(function () {
  function getDataFromStart() {
    $.ajax({
      type: "GET",
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=san+francisco&appid=c1dc5cf44c3a5ebaadb89b904175bcca",
      dataType: "json",
    }).then((res) => {
      console.log(res);
      $("#results").append(res.name);
      setTimeout(function () {
        // $(".loading").attr("class", "hide");
        $(".spinner-border").attr("class", "spinner-border hide");
      }, 1000);
    });
  }
  ``;

  getDataFromStart();

  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    var x = $("#longitude").val();
    var y = $("#latitude").val();
    const coordinates = [x, y];

    $.ajax({
      type: "POST",
      url: "http://localhost:8080/spotkey",
      dataType: "json",
      data: { coordinates: coordinates },
    }).then((res) => {
      console.log(res);
    });
  });
});
