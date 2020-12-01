var express = require('express'); 
var router = express.Router();
 
 
router.get('/', function(req, res, next) {
    res.render('signinTest', { title: 'Express' });
    console.log("signin")
});


module.exports = router;

