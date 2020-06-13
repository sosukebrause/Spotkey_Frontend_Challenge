INSTRUCTIONS
This is a front end coding challenge meant to test the developers proficiency building a simple API enabled web application. Your task is to build an interface that interacts logically with this API. The interface should have 3 components:

1) A form to POST a single set of coordinates to the API
2) A screen to GET and list all sets of uploaded coordinates and their IDs
3) A loading screen or spinner that lets the user wait while coordinates are fetched (5 seconds)

API DOCUMENTATION
This API has a single endpoint that accepts two methods (GET, POST): localhost:8080/coordinates

POST requests to /coordinates accept JSON with the following structure:

{
  'coordinates':["1.234", "5.6789"]
}


GET requests to /coordinates return a JSON dictionary with IDs and coordinate data:

{
  "6c1e79dc-a830-11ea-a91d-dca90493994f": ["1.234", "5.6789"],
  "6df7e00e-a830-11ea-a91d-dca90493994f": ["43.80294", "122.60293"]
}


STARTING THE API
Included is a python virtual environment, which you can activate with the following bash command:

source env/bin/activate

Then you can run the API with the following command:

python3 api.py
OR
python api.py


ALTERNATIVELY (e.g. if you have any difficulties)
You can run the following two commands from the root directory Frontend_Challenge:

pip install -r requirements.txt
python api.py