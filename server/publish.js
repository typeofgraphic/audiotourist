Meteor.publish('venues', function() {
  return Venues.find({});
});