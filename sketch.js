var myMap;
var canvas;
var mappa = new Mappa('Leaflet');

var date, hours, minutes, seconds;
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

  intervalCurrentPosition(showPosition, 1000);
  // put setup code here
}

function draw() {
  clear();
  _latitude = position.latitude;
  _longitude = position.longitude;

  var character_position = myMap.latLngToPixel(_latitude,_longitude);
  var charmander_position = myMap.latLngToPixel(_latitude*0.99999,_longitude*0.9998);
  image(character, character_position.x, character_position.y, character.width*1.5, character.height*1.5);
  image(charmander, charmander_position.x, charmander_position.y, charmander.width/4.5, charmander.height/4.5);
  imageMode(CENTER);
  image(tab, windowWidth/2, 5.3*(windowHeight/6), tab.width, tab.height);

//time
noStroke();
fill('#989898');
rectMode(CENTER);
rect(windowWidth-200,100,220,160);

stroke('#505957');
strokeWeight(8);
fill('black');
rectMode(CENTER);
rect(windowWidth-200,100,180,120);



  var date = new Date;
  hours = date.getHours();
  minutes = '0' + date.getMinutes();
  seconds = '0' + date.getSeconds();
  var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
  noStroke();
  textAlign(CENTER);
  fill('lightGreen');
  textFont('VT323');
  textSize(40);
  text('Time',windowWidth-230,90);
  text(formattedTime,windowWidth-200,130);




}

function showPosition(position){
  console.log(position);
  _latitude = position.latitude;
  _longitude = position.longitude;
}
