$(document).ready(function () {
  function getDataFromStart() {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8080/",
      dataType: "json",
    }).then((res) => {
      console.log(res);
      $("#btnSubmit").on("click", function (e) {
        e.preventDefault();
        console.log("clicked");
        $("form").hide(100);
        $(".loading").show(1000);
        setTimeout(() => {
          $("form").show();
          $(".loading").hide();
        }, 2000);
      });

      //   $("#results").append(res.name);
      //   setTimeout(function () {
      //     $(".loading").attr("class", "loading hide");
      //     $(".spinner-border").attr("class", "spinner-border hide");
      //   }, 1000);
    });
  }
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
