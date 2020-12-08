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
exports.checkMember = function(body,cb){
    var inputPwd = body.pwd;
    connection.query(`SELECT * FROM member where email = '${body.email}';`, function (error, results, fields) {
        // console.log(results[0].name)
        if(error){
            console.log(error);
        }else{
            if(results.length==1){
                if(inputPwd===results[0].pwd){
                    cb(results[0].name)
                }
                else{
                    cb('nonpwd')
                }
            }else{
                cb('nonemail')
            }
            
            
        }
    });
}