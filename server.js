var express =        require('express'),
    server =         express(),
    request =        require('request'),
    async =          require('async');

//Use ./public for static css and js files
server.use(express.static("public"));

var PORT = process.env.PORT || 1337;

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
  }

  function containingBoth(toCheck, toCheckAgainst){

       var values = {};
       var i, current;
       for (i = 0; i < toCheckAgainst.length; i++) {
           current = toCheckAgainst[i]['uri'];
           values[current] = true;
       }
       for (i = 0; i < toCheck.length; i++) {
           current = toCheck[i]['uri'];
           if (values[current]) {
               playlistsContainingBoth.push(current);
           }
       }
         console.log(playlistsContainingBoth);
   }


//Logic to check which collection of playlists is longer
function longest(song1, song2){
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


//Song Calls
function gatherSongs(){
  async.parallel({
  sc11: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc1');
        callback(null, body);
      })
  },
  sc12: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc12');
        callback(null, body);
      })
    },
  sc13: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=200&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc13');
        callback(null, body);
      })
    },
  sc14: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=300&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc14');
        callback(null, body);
      })
    },
  sc15: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=400&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc15');
        callback(null, body);
      })
    },
  sc16: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=500&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc16');
        callback(null, body);
      })
    },
  sc17: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=600&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc17');
        callback(null, body);
      })
    },
    sc18: function(callback){
      request.get({
        url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=100&offset=700&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
      },
        function(error, response, body) {
          console.log('sc18');
          callback(null, body);
        })
      },
      sc21: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc21');
            callback(null, body);
          })
      },
      sc22: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=100&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc22');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
      sc23: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=200&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc23');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
      sc24: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=300&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc24');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
      sc25: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=400&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc25');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
      sc26: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=500&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc26');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
      sc27: function(callback){
        request.get({
          url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=600&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
        },
          function(error, response, body) {
            console.log('sc27');
            // var bod = JSON.parse(body);
            // song1.push.apply(song1, bod['collection']);
            callback(null, body);
          })
        },
        sc28: function(callback){
          request.get({
            url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=100&offset=700&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
          },
            function(error, response, body) {
              console.log('sc28');
              callback(null, body);
            })
          }
    },
    function(err, results) {
      if(!err){
        try {
          var res11 = JSON.parse(results.sc11);
          song1.push.apply(song1, res11['collection']);
          console.log('pushed11');
        }
        catch(err) {
          console.log(err);
          console.log('nope11');
        }

        try {
          var res12 = JSON.parse(results.sc12);
          song1.push.apply(song1, res12['collection']);
          console.log('pushed12');
        }
        catch(err) {
          console.log(err);
          console.log('nope12');
        }

        try {
          var res13 = JSON.parse(results.sc13);
          song1.push.apply(song1, res13['collection']);
          console.log('pushed13');
        }
        catch(err) {
          console.log(err);
          console.log('nope13');
        }

        try {
          var res14 = JSON.parse(results.sc14);
          song1.push.apply(song1, res14['collection']);
          console.log('pushed14');
        }
        catch(err) {
          console.log(err);
          console.log('nope14');
        }

        try {
          var res15 = JSON.parse(results.sc15);
          song1.push.apply(song1, res15['collection']);
          console.log('pushed15');
        }
        catch(err) {
          console.log(err);
          console.log('nope15');
        }

        try {
          var res16 = JSON.parse(results.sc16);
          song1.push.apply(song1, res16['collection']);
          console.log('pushed16');
        }
        catch(err) {
          console.log(err);
          console.log('nope16');
        }

        try {
          var res17 = JSON.parse(results.sc17);
          song1.push.apply(song1, res17['collection']);
          console.log('pushed17');
        }
        catch(err) {
          console.log(err);
          console.log('nope17');
        }

        try {
          var res18 = JSON.parse(results.sc18);
          song1.push.apply(song1, res18['collection']);
          console.log('pushed18');
        }
        catch(err) {
          console.log(err);
          console.log('nope18');
        }

        try {
          var res21 = JSON.parse(results.sc21);
          song2.push.apply(song2, res21['collection']);
          console.log('pushed21');
        }
        catch(err) {
          console.log(err);
          console.log('nope21');
        }

        try {
          var res22 = JSON.parse(results.sc22);
          song2.push.apply(song2, res22['collection']);
          console.log('pushed22');
        }
        catch(err) {
          console.log(err);
          console.log('nope22');
        }

        try {
          var res23 = JSON.parse(results.sc23);
          song2.push.apply(song1, res23['collection']);
          console.log('pushed23');
        }
        catch(err) {
          console.log(err);
          console.log('nope23');
        }

        try {
          var res24 = JSON.parse(results.sc24);
          song2.push.apply(song2, res24['collection']);
          console.log('pushed24');
        }
        catch(err) {
          console.log(err);
          console.log('nope24');
        }

        try {
          var res25 = JSON.parse(results.sc25);
          song2.push.apply(song2, res25['collection']);
          console.log('pushed25');
        }
        catch(err) {
          console.log(err);
          console.log('nope25');
        }

        try {
          var res26 = JSON.parse(results.sc26);
          song2.push.apply(song2, res26['collection']);
          console.log('pushed26');
        }
        catch(err) {
          console.log(err);
          console.log('nope26');
        }

        try {
          var res27 = JSON.parse(results.sc27);
          song2.push.apply(song2, res27['collection']);
          console.log('pushed27');
        }
        catch(err) {
          console.log(err);
          console.log('nope27');
        }

        try {
          var res28 = JSON.parse(results.sc28);
          song2.push.apply(song2, res28['collection']);
          console.log('pushed28');
        }
        catch(err) {
          console.log(err);
          console.log('nope28');
        }

        longest(song1,song2);
        containingBoth(toCheck,toCheckAgainst);
        res.json(200, {data: playlistsContainingBoth});


      }else{
        console.log(err);
      }
    })};

    gatherSongs();
  });




server.listen(PORT, function() {

console.log("1337");

  });
