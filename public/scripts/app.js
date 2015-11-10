function start() {

  var app = angular.module('soundcloud',['ui.bootstrap']);
  app.controller('SoundController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    this.text = 'Daft Punk - Random Access Memories (Vanderway Edit)';
    this.text2 = 'Phoenix - Lisztomania (Shook Remix)';

    this.song1trackID = '';
    this.song2trackID = '';

    this.playlists = '';
    this.currentPlaylist = '';
    this.numOfPlaylists = 0;

    this.currentPage = 1;
    this.itemsPerPage = 1;
    this.pagiShow = false;

    this.progressValue = 0;

    var that = this;
    this.loadShow = {'visibility': 'hidden'};

      this.setPage = function (pageNo) {
      that.currentPage = pageNo;
    };

     this.pageChanged = function() {
       console.log('Page changed to: ' + that.currentPlaylist);
       that.currentPlaylist = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url="+that.playlists[(that.currentPage-1)]);
     };

    this.fetch = function() {
     $http.get("https://api.soundcloud.com/tracks?q="+this.text+'&client_id=c8b9faf87e3e5a145d75eff2e4ca898c')
      .success(function(response) {
        that.song1trackID = response[0].id;
        that.returntext = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+response[0].id+"&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;buying=false&amp;sharing=false&amp;liking=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false");
       })
       .error(function(){
         var x = Document.createElement('div');
         x.innerHTML = 'Error';
         document.querySelector('button').appendChild(x);
       });
    }
    this.fetch();

    this.fetch2 = function() {
      $http.get("https://api.soundcloud.com/tracks?q="+this.text2+'&client_id=c8b9faf87e3e5a145d75eff2e4ca898c')
      .success(function(response) {
        that.song2trackID = response[0].id;
        that.returntext2 = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+response[0].id+"&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;buying=false&amp;sharing=false&amp;liking=false&amp;show_user=true&amp;show_reposts=false&amp;visual=false");
       });
    }
    this.fetch2();

  this.findPlaylists = function(){
    this.loadShow = {'visibility': 'visible'};
    document.querySelector('.progress-bar').classList.add('progress-bar2');
    this.progressValue = 100;
    $http({
      url: '/find/'+that.song1trackID+'/'+that.song2trackID,
      method: 'get'
    })
     .success(function(response) {
       that.playlists = response.data;
       that.currentPlaylist = $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url="+that.playlists[0]);
       that.numOfPlaylists = response.data.length;
       that.pagiShow = true;
       that.loadShow = {'visibility': 'hidden'};
       that.progressValue = 0;
      })
      .error(function(error){
        console.log(error);
      })
   }

  }]);
}

start();
