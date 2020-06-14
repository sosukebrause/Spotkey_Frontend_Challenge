console.log("Hello, Soey");
const axios = require("./node_modules/axios");

async function getRequest() {
  try {
    const result = await axios.get("http://localhost:8080/spotkey");
    const data = await result.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function postRequest(point) {
  try {
    const result = await axios.post("http://localhost:8080/spotkey", {
      coordinates: point,
    });
    const data = await result.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

// this is a anonymous function because top-level async is not
// allowed in js yet.
(async () => {
  const newData = ["1234", "234.5"];
  const getResult = await getRequest();
  const postResult = await postRequest(newData);

  console.log(getResult);
  console.log(postResult);
})();

// you could also do this...
//  getRequest()
//  .then((r) => {
//  console.log(r);
//  return r;
//  })
//  .catch((e) => console.log(e));

//  postRequest(newData)
//  .then((r) => {
//  console.log(r);
//  return r;
//  })
//  .catch((e) => console.log(e));
