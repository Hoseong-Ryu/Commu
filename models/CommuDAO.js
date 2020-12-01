var connection = require('./db')

exports.insertMember = function(body, cb){
    sql = 'INSERT INTO member (email, name) VALUES(?, ?)';
    values = [body.name, body.email];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    })
}