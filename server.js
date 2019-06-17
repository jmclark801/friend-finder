var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 8080;

// Allow use of static assets inp ublic directory
app.use(express.static(path.join(__dirname, "app/public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function(){
  console.log(`Listening on localhost:${PORT}`);
})


