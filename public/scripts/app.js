function start() {

  var app = angular.module('soundcloud',['ui.bootstrap']);
  app.controller('SoundController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    this.text = 'jai wolf indian summer';
    this.text2 = 'something about you odesza';

    this.song1trackID = '';
    this.song2trackID = '';

    this.playlists = '';
    this.currentPlaylist = '';
    this.numOfPlaylists = 0;

    this.currentPage = 1;
    this.itemsPerPage = 1;

    var that = this;

    // this.setPage = function (pageNo) {
    //   that.currentPage = pageNo;
    // };

      this.setPage = function (pageNo) {
      that.currentPage = pageNo;
    };

     this.pageChanged = function() {
       console.log('Page changed to: ' + that.currentPlaylist);
       that.currentPlaylist = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url="+that.playlists[that.currentPage]);
     };




    this.fetch = function() {
     $http.get("https://api.soundcloud.com/tracks?"+'c8b9faf87e3e5a145d75eff2e4ca898c'+"&q="+this.text)
      .success(function(response) {
        that.song1trackID = response[0].id;
        that.returntext = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+response[0].id+"&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;buying=false&amp;sharing=false&amp;liking=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false");
       });
    }
    this.fetch();

    this.fetch2 = function() {
     $http.get("https://api.soundcloud.com/tracks?"+'c8b9faf87e3e5a145d75eff2e4ca898c'+"&q="+this.text2)
      .success(function(response) {
        that.song2trackID = response[0].id;
        that.returntext2 = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+response[0].id+"&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;buying=false&amp;sharing=false&amp;liking=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false");
       });
    }
    this.fetch2();

  this.findPlaylists = function(){

    $http({
      url: '/find/'+that.song1trackID+'/'+that.song2trackID,
      method: 'get'
    })
     .success(function(response) {
       that.playlists = response.data;
       that.currentPlaylist = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url="+that.playlists[0]);
       that.numOfPlaylists = response.data.length;
      })
      .error(function(error){
        console.log(error);
      })
   }

  }]);
}

start();
