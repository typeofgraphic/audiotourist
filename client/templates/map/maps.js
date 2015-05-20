Template.map.helpers({

  locations: function(){

    //var l = Meteor.call('locations', function(err,res){
    //  console.log(err,res);
    //});

    console.log(l);
    //
    //dsv = d3.dsv("|", "text/plain");
    //
    //dsv('touchtunes-locations-ny.txt', function(d){
    //  console.log(d);
    //})

  }

});

Template.map.events({



});



Template.map.rendered = function(){

  var map = L.map('map').setView([51.505, -0.09], 13);

  var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images';

  var marker = L.marker([51.5, -0.09]).addTo(map);

  //var circle = L.circle([51.508, -0.11], 500, {
  //  color: 'red',
  //  fillColor: '#f03',
  //  fillOpacity: 0.5
  //}).addTo(map);
  //
  //var polygon = L.polygon([
  //  [51.509, -0.08],
  //  [51.503, -0.06],
  //  [51.51, -0.047]
  //]).addTo(map);

};