var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session')
var model = require('../models/CommuDAO');
 



  router.get('/logout', (req, res)=>{
    req.session.destroy(function(err){
      if(err)
          console.log(`req.session.destroy error : ${err}`);
      res.redirect('/index');
    });
  })
  


module.exports = router;
