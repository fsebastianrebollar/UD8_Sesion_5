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

router.get('/get_info_1', function(req, res, next) {
  Comment.find({})
    .then(comments => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        success:1, 
        title:"Valencia", 
        description: "Desarrollado por Adam Gotlin",
        comment_number: 4}))
      res.end();
    })
  
});

router.get('/get_info_2', function(req, res, next) {
  Comment.find({})
    .then(comments => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        success:1, 
        title:"Gandía", 
        description: "Desarrollado por Sofía García",
        comment_number: 5}))
      res.end();
    })
  
});

router.get('/get_info_3', function(req, res, next) {
  Comment.find({})
    .then(comments => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        success:1, 
        title:"Alcoi", 
        description: "Desarrollado por Sara Martinez",
        comment_number: 9}))
      res.end();
    })
  
});

router.get('/get_info_4', function(req, res, next) {
  Comment.find({})
    .then(comments => {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({
        success:1, 
        title:"Castellón", 
        description: "Desarrollado por Carla Gabalda",
        comment_number: 13}))
      res.end();
    })
  
});

module.exports = router;
