var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app', 'public')))

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  