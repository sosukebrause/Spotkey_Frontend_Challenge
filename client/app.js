function getData(url) {
  return $.ajax({
    url: url,
    type: "GET",
  });
}
function postData(url, data) {
  return $.ajax({
    url: url,
    type: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Max-Age": 604800,
      "Content-type": "application/json",
    },
    data: data,
  });
}

async function getSpotkeys() {
  try {
    const res = await getData("http://localhost:8080/spotkey");
    return res;
  } catch (err) {
    console.log(err);
  }
}
async function postSpotkey(spotkey) {
  try {
    const res = await postData(
      "http://localhost:8080/spotkey",
      JSON.stringify(spotkey)
    );
    return res;
  } catch (err) {
    console.log(err);
  }
}
$(document).ready(async function () {
  $("#btnGet").on("click", async function (e) {
    e.preventDefault();
    console.log("clicked");
    $(".btnGet").hide(100);
    $(".loading").show(1000);
    const getResponse = await getSpotkeys();
    const results = JSON.parse(getResponse);
    console.log(results);
    for (let key in results) {
      console.log(key);
      console.log(results[key]);
    }
    $("form").show();
    $(".loading").hide();
  });
  $("#btnSubmit").on("click", async function (e) {
    e.preventDefault();
    console.log("clicked");
    $(".btnSubmit").hide(100);
    $(".loading").show(1000);
    const newData = { coordinates: ["1234", "234.5"] };

    const postResponse = await postSpotkey(newData);
    console.log(postResponse);

    $("form").show();
    $(".loading").hide();
  });

  // $("#btnSubmit").on("click", function (e) {
  //   e.preventDefault();
  //   console.log("clicked");
  //   $("form").hide(100);
  //   $(".loading").show(1000);
  //   setTimeout(() => {
  //     $("form").show();
  //     $(".loading").hide();
  //   }, 2000);
  // });
  // function getDataFromStart() {
  //   $.ajax({
  //     type: "GET",
  //     url: "http://localhost:8080/spotkey",
  //     dataType: "json",
  //   }).then((res) => {
  //     console.log(res);
  // $("#btnSubmit").on("click", function (e) {
  //   e.preventDefault();
  //   console.log("clicked");
  //   $("form").hide(100);
  //   $(".loading").show(1000);
  //   setTimeout(() => {
  //     $("form").show();
  //     $(".loading").hide();
  //   }, 2000);
  // });

  //     //   $("#results").append(res.name);
  //     //   setTimeout(function () {
  //     //     $(".loading").attr("class", "loading hide");
  //     //     $(".spinner-border").attr("class", "spinner-border hide");
  //     //   }, 1000);
  //   });
  // }
  // getDataFromStart();

  // $("#btnSubmit").on("click", function (e) {
  //   e.preventDefault();
  //   var x = $("#latitude").val();
  //   var y = $("#longitude").val();
  //   const coordinates = [x, y];

  //   $.ajax({
  //     type: "POST",
  //     url: "http://localhost:8080/spotkey",
  //     dataType: "json",
  //     data: { coordinates: coordinates },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // });
});
