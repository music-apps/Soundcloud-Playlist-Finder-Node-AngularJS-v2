var express =        require('express'),
    server =         express(),
    request =        require('request');

//Use ./public for static css and js files
server.use(express.static("public"));

var PORT = process.env.PORT || 1337;

//ROUTES
server.get('/', function(req, res){
  res.render('index.html', {});
})

// FIND
server.get('/find/:paramID1/:paramID2', function (req, res) {

  var id1 = req.params.paramID1,
  id2 = req.params.paramID2,
  song1 = [],
  song2 = [],
  toCheck = null,
  toCheckAgainst = null,
  //Defining the array to contain the results
  playlistsContainingBoth = [];

  function playlistOps() {
    setTimeout(function(){longest(song1,song2);},6000)
    setTimeout(function(){containingBoth(toCheck,toCheckAgainst);},7000)
    setTimeout(function(){res.json(200, {data: playlistsContainingBoth});},8000)
  }

  function containingBoth(toCheck, toCheckAgainst){

    //Check all the playlists in the to_check array against the to_check_against array
    for(var i=0;i<toCheck.length;i+=1){
      for(var j=0;j<toCheckAgainst.length;j+=1){
        if (toCheck[i]['uri'] === toCheckAgainst[j]['uri']) {
          playlistsContainingBoth.push(toCheck[i]['uri']);
          console.log('pushing');
          console.log(toCheck[i]['uri']);
          console.log(toCheckAgainst[j]['uri']);
        }
      }
    }
    console.log(playlistsContainingBoth);
  }

  function longest(song1, song2){
  //Logic to check which collection of playlists is longer
  if (song1.length > song2.length) {
      toCheck = song1;
      toCheckAgainst = song2;
      console.log(toCheck.length);
      console.log(toCheckAgainst.length);
    }

  else {
      toCheck = song2
      toCheckAgainst = song1
      console.log(toCheck.length);
      console.log(toCheckAgainst.length);
      }
  }

  console.log(id1,id2);

//Song1 Calls
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        var bod = JSON.parse(body);
        song1.push.apply(song1, bod['collection']);
      }),
      request.get({
        url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
      },
        function(error, response, body) {
          var bod = JSON.parse(body);
          song1.push.apply(song1, bod['collection']);
        }),
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=200&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            var bod = JSON.parse(body);
            song1.push.apply(song1, bod['collection']);
          }),
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=300&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            var bod = JSON.parse(body);
            song1.push.apply(song1, bod['collection']);
          })
        //   ,
        // request.get({
        //   url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=400&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
        // },
        //   function(error, response, body) {
        //     var bod = JSON.parse(body);
        //     song1.push.apply(song1, bod['collection']);
        //   }),

//Song2 Calls
      request.get({
        url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
      },
        function(error, response, body, dogbreath) {
          var bod = JSON.parse(body);
          song2.push.apply(song2, bod['collection']);
        }),
      request.get({
        url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
      },
        function(error, response, body, dogbreath) {
          var bod = JSON.parse(body);
          song2.push.apply(song2, bod['collection']);
        }),
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=200&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body, dogbreath) {
            var bod = JSON.parse(body);
            song2.push.apply(song2, bod['collection']);
          }),
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=300&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body, dogbreath) {
            var bod = JSON.parse(body);
            song2.push.apply(song2, bod['collection']);
          })
        //   ,
        // request.get({
        //   url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=400&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
        // },
        //   function(error, response, body, dogbreath) {
        //     var bod = JSON.parse(body);
        //     song2.push.apply(song2, bod['collection']);
        //   })

  playlistOps()
})





server.listen(PORT, function() {

console.log("1337");

  });
