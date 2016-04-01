var express =        require('express'),
    server =         express(),
    request =        require('request'),
    async =          require('async'),
    http =           require('http');

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
    setTimeout(function(){console.log(song1.length);},15000)
    setTimeout(function(){longest(song1,song2);},6000)
    setTimeout(function(){containingBoth(toCheck,toCheckAgainst);},6500)
    setTimeout(function(){res.json(200, {data: playlistsContainingBoth});},8000)
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

    //Check all the playlists in the to_check array against the to_check_against array
    // function containingBoth(toCheck, toCheckAgainst){
  //   for(var i=0;i<toCheck.length;i+=1){
  //     for(var j=0;j<toCheckAgainst.length;j+=1){
  //       if (toCheck[i]['uri'] === toCheckAgainst[j]['uri']) {
  //         playlistsContainingBoth.push(toCheck[i]['uri']);
  //         console.log('pushing');
  //         console.log(toCheck[i]['uri']);
  //         console.log(toCheckAgainst[j]['uri']);
  //       }
  //     }
  //   }
  //   console.log(playlistsContainingBoth);
  // }


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

//Song1 Calls

async.parallel({
sc1: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc1');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })

  // http.get("http://www.google.com", function(res){
  //   console.log("google done");
  //   callback(null, res.statusCode);
  // })

},
sc2: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=175&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc2');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
sc3: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=350&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc3');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
sc4: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=525&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc4');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
sc5: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=700&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc5');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
sc6: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=875&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc6');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
sc7: function(callback){
  request.get({
    url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=1050&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
  },
    function(error, response, body) {
      console.log('sc7');
      // var bod = JSON.parse(body);
      // song1.push.apply(song1, bod['collection']);
      callback(null, body);
    })
  },
  sc8: function(callback){
    request.get({
      url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=1225&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
    },
      function(error, response, body) {
        console.log('sc8');
        // var bod = JSON.parse(body);
        // song1.push.apply(song1, bod['collection']);
        callback(null, body);
      })
    }
  },
  function(err, results) {
    if(!err){
      var res1 = JSON.parse(results.sc1);
      song1.push.apply(song1, res1['collection']);

      var res2 = JSON.parse(results.sc2);
      song1.push.apply(song1, res2['collection']);

      var res3 = JSON.parse(results.sc3);
      song1.push.apply(song1, res3['collection']);

      var res4 = JSON.parse(results.sc4);
      song1.push.apply(song1, res4['collection']);

      var res5 = JSON.parse(results.sc5);
      song1.push.apply(song1, res5['collection']);

      var res6 = JSON.parse(results.sc6);
      song1.push.apply(song1, res6['collection']);

      var res7 = JSON.parse(results.sc7);
      song1.push.apply(song1, res7['collection']);

      var res8 = JSON.parse(results.sc8);
      song1.push.apply(song1, res8['collection']);

    }else{
      console.log(err);
    }
  }
);

//     request.get({
//       url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//     },
//       function(error, response, body) {
//         var bod = JSON.parse(body);
//         song1.push.apply(song1, bod['collection']);
//       }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=175&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//       },
//         function(error, response, body) {
//           var bod = JSON.parse(body);
//           song1.push.apply(song1, bod['collection']);
//         }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=350&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=525&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=700&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=875&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=1050&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//         request.get({
//           url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID1+'/playlists?limit=175&offset=1225&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//         },
//           function(error, response, body) {
//             var bod = JSON.parse(body);
//             song1.push.apply(song1, bod['collection']);
//           }),
//
// //Song2 Calls
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=0&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=175&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=350&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=525&client_id=c8b9faf87e3e5a145d75eff2e4ca898c',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=700&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=875&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=1050&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         }),
//       request.get({
//         url: 'https://api-v2.soundcloud.com/tracks/'+req.params.paramID2+'/playlists?limit=175&offset=1225&client_id=c8b9faf87e3e5a145d75eff2e4ca898c?callback=?',
//       },
//         function(error, response, body, dogbreath) {
//           var bod = JSON.parse(body);
//           song2.push.apply(song2, bod['collection']);
//         })

  playlistOps()
})





server.listen(PORT, function() {

console.log("1337");

  });
