var express = require('express');
var router = express.Router();

/* API home page */
router.get('/', function(req, res, next) {
  var message = [
    {
      text: 'Hello from Express API!'
    }
  ];
  res.json(message);
}
);

module.exports = router;