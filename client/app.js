$(document).ready(function () {
  function getDataFromStart() {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/spotkey",
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
    var x = $("#latitude").val();
    var y = $("#longitude").val();
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
