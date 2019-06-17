

// Your apiRoutes.js file should contain two routes:
var friendData = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res){
    console.log(req);
    res.json(friendData);
  })

  app.post('/api/friends', function(req, res){
    console.log(req);
    friendData.push(req.body);
  })
}
