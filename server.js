var express =        require('express'),
    server =         express(),
    ejs =            require('ejs');

// this sets is to the process PORT
// if it's defined, otherwise it will default to 3000.

//Use ./public for static css and js files
server.use(express.static("./public"));


var PORT = process.env.PORT || 1337;

//ROUTES
server.get('/', function(req, res){

  res.render('index.ejs', {});

})

server.listen(PORT, function() {

console.log("1337");

  });
