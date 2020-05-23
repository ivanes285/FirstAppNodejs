
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.render('index.html',{tittle:'First web Node'});
  });
  
  router.get("/contact", (req, res) => {
    res.render('contact.html',{tittle:'Contact Page'});
  });
  
  module.exports= router;