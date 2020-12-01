var connection = require('./db')

//회원가입
exports.insertMember = function(body, cb){
    sql = 'INSERT INTO member (email, name, pwd) VALUES(?, ?, ?)';
    values = [body.email, body.name, body.pwd];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    })
}

//로그인
exports.checkMember = function(query,cb){
    var inputPwd = query.pwd;
    inputPwd
    connection.query(`SELECT * FROM member where email = '${query.email}';`, function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
           if(inputPwd===results[0].pwd){
               cb(results[0].name)
           }
        }
    });
}