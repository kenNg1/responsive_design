var express = require('express');
// morgan logs requests from users when server is running
var morgan = require('morgan');
var app = express();
var ejs = require('ejs');
// ejs-mate supercharges ejs (express js)
var engine = require('ejs-mate');

//MIDDLEWARE
//invokes the morgan object
app.use(morgan('dev'));
//tell nodejs which engine ejs will use
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//tells express where to find public static pages
app.use(express.static(__dirname + '/public'));




var mainRoutes = require('./routes/main');

app.use(mainRoutes);

app.listen(3000, function(err) {
  if (err) throw err;
  console.log("Server is running on port 3000");
});
