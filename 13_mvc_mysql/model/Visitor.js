exports.getVisitors = () => {
  return [
    { id: 1, name: "홍길동", comment: "내가 왔다." },
    { id: 2, name: "이찬혁", comment: "으라차차" },
  ];
};

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "",
  user: "",
  password: "5656",
  database: "kdt",
});
