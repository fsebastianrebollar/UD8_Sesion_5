var express = require('express');
var router = express.Router();
const Comment = require('../models/comment');

/* GET users listing. */
router.get('/get_info', function(req, res, next) {
  Comment.find({})
    .then(comments => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        success:1, 
        title:"Ontiyent", 
        description: "Desarrollado por Francisco Sebastián",
        comment_number: comments.length}))
      res.end();
    })
  
});

module.exports = router;
