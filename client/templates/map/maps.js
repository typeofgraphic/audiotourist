Meteor.subscribe('venues');

Template.map.helpers({

  locations: function(){

    return Session.get('title');

  },

  focus: function(){
    return Session.get('focus');
  }

});

Template.map.events({

  'click #getDukeboxLocations': function(e){

    //console.log('getDukeboxLocations', e);

    Meteor.call('getDukeboxLocations', function(err, res){
      console.log(err, res);
    })

  },

  'click #map': function(e){
    console.log('map',e);
  },

  'click .leaflet-marker-icon': function(e){
    console.log('icon', this, e)
  }
});



Template.map.rendered = function(){

  var map = L.map('map').setView([40.7, -74.008], 11);

  var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images';

  //var marker = L.marker([40.7, -74.008]).addTo(map);

  var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);

  //var polygon = L.polygon([
  //  [51.509, -0.08],
  //  [51.503, -0.06],
  //  [51.51, -0.047]
  //]).addTo(map);

  dsv = d3.dsv("|", "text/plain");

  var v = Venues.find().fetch();

  //console.log(v, Venues.findOne());

  var icon = {
    test: "test"
  };

  v.forEach(function(d){
    //console.log(d);
    var x = new L.marker([d.latitude, d.longitude], { data : d })
      .on('click', function(e){
        Session.set('focus', e.target.options.data)
        console.log('marker clicked', e.target.options.data)
      });
      //.bindPopup(d.name);
    x.addTo(map);
  });

  map.on('click', function(e){
    console.log('leaflet click', e.latlng);
    Session.set('coords', e.latlng);
  });

  d3.json('songs.json', function(json){
    console.log(json);
    d3.select('#albums').selectAll('img').data(json).enter().append('img')
      .attr("class", "pic")
      .attr("src", function(d) { return d.albumCover})
      .attr("height", function(d){ return d.id + "px"})
      .attr("width", function(d){ return d.id + "px"})

  });

  d3.select('.pic').on('rollover', function(d) {
    console.log(this, d);
  })





};