var express = require('express');
var router = express.Router();

var postController = require('../controllers/postController');

/* API home page */
router.get('/', function(req, res, next) {
  var message = ['Hello from Express API!'];
  res.json(message);
}
);

router.post('/posts/create', postController.createPost);

router.get('/posts', postController.getAllPosts);

router.delete('/posts/delete', postController.deletePost);

module.exports = router;