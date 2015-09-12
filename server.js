var express =        require('express'),
    server =         express(),
    ejs =            require('ejs'),
    bodyParser =     require('body-parser');

// this sets is to the process PORT
// if it's defined, otherwise it will default to 3000.

//Use ./public for static css and js files
server.use(express.static("./public"));
server.use(bodyParser.urlencoded({ extended: true }));


var PORT = process.env.PORT || 1337;

//ROUTES
server.get('/', function(req, res){
  res.render('index.ejs', {});
})

// CREATE
server.post('/', bodyParser.json(), function (req, res) {
  var data = req.body;
  console.log('hi');
  console.log(data);
});

// FIND
server.get('/find/:paramID1/:paramID2', function (req, res) {
  console.log('aSDFADFADF');

  // , bodyParser.json()

  var id1 = req.params.paramID1;
  var id2 = req.params.paramID2;
  console.log(id1,id2);
  console.log('aSDFADFADF');
});

server.listen(PORT, function() {

console.log("1337");

  });
