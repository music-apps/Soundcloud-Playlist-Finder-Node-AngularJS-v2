function start() {

  var app = angular.module('soundcloud',[]);
  app.controller('SoundController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {

    this.text = 'd.a.n.c.e.';
    this.text2 = 'mgmt justice remix';

    this.song1trackID = '';
    this.song2trackID = '';

    this.playlists1 = '';

    var that = this;

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
      });
   }

//     $.ajax({
//     url: 'https://api-v2.soundcloud.com/users/13082950/likes?limit=10&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//     dataType: 'json',
//     data: {'my':'data'},
//     type: 'POST'
// }).fail(function($xhr) {
//     var data = $xhr.responseJSON;
//     console.log(data);
// });

    // $.ajax({
    //        type:  'GET',
    //        url:   'https://api-v2.soundcloud.com/tracks/102113299/related?anon_user_id=36331428&limit=10&offset=0&linked_partitioning=1',
    //        dataType: 'json',
    //        success: function(error, data){
    //        },
    //        error: function(xhr, textStatus, errorThrown) {
    //          console.table(errorThrown);
    //       }
    //     });

//     $.getJSON('https://api-v2.soundcloud.com/tracks/'+that.song1trackID+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//     function( data ) {
//         console.log(data);
// });

    // $http.jsonp('https://api-v2.soundcloud.com/tracks/'+that.song1trackID+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c')
    // .success(function(response) {
    //
    //     that.playlists1 = response;
    //
    // })
    // .error(function(response) {
    //          console.table(response);
    //       })



  }]);
}

start();
