var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var model = require('../models/CommuDAO');
 

router.post('/', function(req, res, next) {
    console.log('insertMember')
    if(req.body.name && req.body.email){
        model.insertMember(req.body, (results)=>{
          res.redirect('/');
        })
      }
});

/* GET */
router.get('/', function(req, res, next) {
    if(req.query.email && req.query.pwd){
        console.log('checkMember')
        model.checkMember(req.query, (results)=>{
            if(results=='nonemail'||results=='nonpwd'){
                res.redirect('/login_page');
            } 
            else{
                console.log(results)
                res.render('index', { title: results });
            }
            
        })
      }
});

module.exports = router;
