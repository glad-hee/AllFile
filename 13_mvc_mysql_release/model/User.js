// TODO: DB(mysql) 연결   ok
// TODO: 모델 코드

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "5656",
  database: "mvc_practice",
});

// ok
exports.register = (data, callback) => {
  // data : req.body
  // callback : sql문 실행 후 할 일 함수
  const sql = `INSERT INTO user(userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}');`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("model post signup>", rows);
    // ok~~ {
    //
    // } 실행이 잘 됐어! , mysql에 v찍히는거랑 같음

    callback();
  });
};

exports.loginUser = (data, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

// controller 에서 보내주는 거 (req.body.userid  ,  result )
exports.viewProfile = (userid, callback) => {
  const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("model viewProfile>", rows);
    callback(rows); // 컨트롤러 result 콜백자리에 보내줌
  });
};

exports.editProfile = (data, callback) => {
  const sql = `UPDATE user SET userid='${data.userid}', name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

exports.deleteProfile = (id, callback) => {
  const sql = `DELETE FROM user WHERE ID = ${id}`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }
    callback();
  });
};
