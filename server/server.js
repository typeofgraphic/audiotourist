//d3plus = Meteor.npmRequire('d3plus');



Meteor.methods({

  getDukeboxLocations: function(userLocation){

    options = {
      //query: ""
      params: {
        "api_key": "ENTER_YOUR_API_KEY_HERE",
        "latitude": 40.7,
        "longitude": -74.008,
        "user_latitude": 45.509270,
        "user_longitude":-73.669121,
        "horizontal_accuracy": 0,
        "radius": 2555,
        "limit": 100
      }
    };

    var x = HTTP.get('http://dev.touchtunes.com/locations', options);

    x.data.response.locations.forEach(function(d){

      Venues.upsert({ location_id : d.location_id }, d);

    });

    return x;

  }

});