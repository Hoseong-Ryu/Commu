var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session')
var model = require('../models/CommuDAO');
 

router.post('/index', function(req, res, next) {
    console.log('insertMember')
    if(req.body.name && req.body.email){
        model.insertMember(req.body, (results)=>{
          res.redirect('/index');
        })
      }
    if(req.body.email && req.body.pwd){
        console.log('checkMember')
        model.checkMember(req.body,req.session, (results)=>{
            if(results=='nonemail'||results=='nonpwd'){
                res.redirect('/login_page');
            } 
            else{
                console.log(results)
                res.render('index', { title: req.session.name, login: true });
            }
        })
    }
    else{
        res.render('index', { title: 'Commu' });
    }
});
// /* GET home page. */
// router.get('/index', function(req, res, next) {
//     res.render('index', { title: 'Commu' });
// });

router.get('/index', (req, res) => {      // 1
    if(req.session.logined) {
      res.render('index', { title: req.session.name, login: true });
    } else {
      res.render('index', { title: "Commu", login: false });
    }
  });

  router.get('/logout', (req, res)=>{
    req.session.destroy(function(err){
      if(err)
          console.log(`req.session.destroy error : ${err}`);
      res.redirect('/index');
    });
  })
  


module.exports = router;
