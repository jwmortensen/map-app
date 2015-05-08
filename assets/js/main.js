L.mapbox.accessToken = 'pk.eyJ1Ijoiandtb3J0ZW5zZW4iLCJhIjoiQjJHSVp4NCJ9.AYH98hv0ksUCLvwmsJHfeQ';
var map = L.mapbox.map('map').setView([29.785, -95.39], 10);
L.mapbox.tileLayer('mapbox.outdoors').setZIndex(1).addTo(map);
var layers = {
  "0000": L.mapbox.tileLayer('jwmortensen.z2iq9f6r'),
  "1000": L.mapbox.tileLayer('jwmortensen.juelv7vi')
  }
addLayer("0000");

var race = document.getElementById('race');
var gender = document.getElementById('gender');
var age = document.getElementById('age');
var temp = document.getElementById('temp');
race.onchange = updateLayer
gender.onchange = updateLayer
age.onchange = updateLayer
temp.onchange = updateLayer

function updateLayer(e) {
  e.preventDefault();
  e.stopPropagation();

  removeLayers();
  var layerKey = getLayer();
  addLayer(layerKey);
}

function getLayer() {
  return race.value.concat(gender.value, age.value, temp.value);
}

function removeLayers() {
  for (i in layers) {
    map.removeLayer(layers[i]);
    map.legendControl.removeLegend(document.getElementById('legend-'+i).innerHTML);
  }
}

function addLayer(layerKey) {
  var layer = layers[layerKey]
  layer.setZIndex(2);
  map.addLayer(layer);
  map.legendControl.addLegend(document.getElementById('legend-'+layerKey).innerHTML);
}

