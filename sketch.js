var myMap;
var canvas;
var mappa = new Mappa('Leaflet');

var position;
var _latitude;
var _longitude;



function preload(){
  position = getCurrentPosition();
  character = loadImage('./images/character.png');
  charmander = loadImage('./images/charmander.png');
  tab = loadImage('./images/tab.png');
  // put preload code here
}

function setup() {
  console.log(position);
  noCanvas();

  var options = {
    lat: position.latitude,
    lng: position.longitude,
    zoom: 17,
    //use this link for leaflet
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
  }

  var _latitude = position.latitude;
  var _longitude = position.longitude;

  canvas = createCanvas(windowWidth,windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // put setup code here
}

function draw() {
  clear();
  var _latitude = position.latitude;
  var _longitude = position.longitude;

  var character_position = myMap.latLngToPixel(_latitude,_longitude);
  var charmander_position = myMap.latLngToPixel(_latitude*0.99999,_longitude*0.9998);
  image(character, character_position.x, character_position.y, character.width, character.height);
  image(charmander, charmander_position.x, charmander_position.y, charmander.width/6, charmander.height/6);
  imageMode(CENTER);
  image(tab, windowWidth/2, 2.3*(windowHeight/4), 3*(windowWidth/4), 3*(windowWidth/4));
  textFont('Press Start 2P');
  textSize(40);
  text('Look, a wild Charmander!',1*(windowWidth/5),7*(windowHeight/8));
  textFont('Press Start 2P');
}
