var express = require('express'); 
var router = express.Router();
 
 
router.get('/', function(req, res, next) {
    res.render('LoginTest', { title: 'Express' });
    console.log("Login")
});


module.exports = router;