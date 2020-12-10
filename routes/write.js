var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session')
var model = require('../models/CommuDAO');
 

router.post('/', function(req, res, next) {
  if(req.session.name && req.body.contents && req.body.title){
    model.checkPostIndex((data)=>{
      model.writePost(req.body,req.session, (results)=>{
        console.log('작성 완료');
        res.render('index',{title: req.session.name, login: true,  postInfo: data,});
      })
    }); 
    }
    
  else{
    res.redirect('/write');
      console.log('작성 실패');
  }
});




module.exports = router;
