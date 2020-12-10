var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session')
var model = require('../models/CommuDAO');
 




router.post('/', function(req, res, next) {
  if(req.session.name && req.body.contents && req.body.title){
      model.writePost(req.body,req.session, (results)=>{
        console.log('작성 완료');
        res.redirect('/index');
      })
    }
  else{
      res.render('index', { title: req.session.name });
      console.log('작성 실패');
  }
});
  


module.exports = router;
