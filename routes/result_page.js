var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var model = require('../models/CommuDAO');
 
/* GET */
router.post('/', function(req, res, next) {
    if(req.body.name && req.body.email){
        model.insertMember(req.body, (results)=>{
          res.redirect('/');
        })
      }
    // var name = req.body.name;
    // var email = req.body.email;
    // console.log("## get request");
    // res.render('result_page', {title:"title", name: name, email: email, method: "post" });
});

module.exports = router;
