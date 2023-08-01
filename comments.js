// create web server
var express = require('express');
var router = express.Router();

// create a route for the app
router.get('/comments', function(req, res) {
  res.send('GET handler for localhost:3000/comments route.');
});

router.post('/comments', function(req, res) {
  res.send('POST handler for localhost:3000/comments route.');
});

router.delete('/comments/:id', function(req, res) {
  res.send('DELETE handler for localhost:3000/comments route.');
});

module.exports = router;