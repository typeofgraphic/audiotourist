Meteor.methods({

  locations: function(){

    var text = JSON.parse(Assets.getText('touchtunes-locations-ny.txt'));

    return text;

  }

});