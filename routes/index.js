var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session')
var model = require('../models/CommuDAO');
 

router.post('/index', function(req, res, next) {
    console.log('insertMember')
    if(req.body.name && req.body.email){
        model.insertMember(req.body, (results)=>{
          res.redirect('/');
        })
      }
    if(req.body.email && req.body.pwd){
        console.log('checkMember')
        model.checkMember(req.body, (results)=>{
            if(results=='nonemail'||results=='nonpwd'){
                console.log('nonemail');
                res.redirect('/login_page');
            } 
            else{
                console.log(results)
                res.render('index', { title: results });
            }
        })
    }
    else{
        res.render('index', { title: 'Commu' });
    }
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Commu' });
});

module.exports = router;
