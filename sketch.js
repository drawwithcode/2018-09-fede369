var canvas;
var myMap;
var myLoc;
var w = 800;
var h = 700;
var key =
  "pk.eyJ1IjoibWFwcGF1c2VyIiwiYSI6ImNqNXNrbXIyZDE2a2cyd3J4Ym53YWxieXgifQ.JENDJqKE1SLISxL3Q_T22w";

var options = {
  lat: 0,
  lng: 0,
  zoom: 12,
  style: "mapbox://styles/mapbox/dark-v9",
  pitch: 10
};

var mappa = new Mappa("MapboxGL", key);

function preload() {
  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(w, h).parent("canvasHolder");
  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
}

function draw() {
  clear();
  var point = myMap.latLngToPixel(myLoc.latitude, myLoc.longitude);
  fill("orange");
  ellipse(point.x, point.y, 10);
}
