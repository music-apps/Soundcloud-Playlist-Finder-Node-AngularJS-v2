function start() {

  var app = angular.module('soundcloud',[]);

  app.controller('SoundController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    this.returntext = '';
    var that = this;

    this.fetch = function() {
     $http.get("https://api.soundcloud.com/tracks?"+'c8b9faf87e3e5a145d75eff2e4ca898c'+"&q="+this.text)
      .success(function(response) {
      that.returntext = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+response[0].id.toString()+"&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;buying=false&amp;sharing=false&amp;liking=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false");
       });
    }
this.fetch();
  }]);
}

start();
