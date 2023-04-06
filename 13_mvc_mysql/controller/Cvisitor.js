const Visitor = require("../model/Visitor");

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after] mysql db 연결!
  Visitor.getVisitors((result) => {
    console.log("Cvisitor.js >>", result);
    // => [ {}, {}, {} ]
    res.render("visitor", { data: result });
  });
};

// (3) POST /visitor/write
exports.postVisitor = (req, res) => {
  console.log(req.body);

  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js >>", result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

// (4) DELETE /visitor/delete
exports.deleteVisitor = (req, res) => {
  console.log(req.body); // axios data {id : n}

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log("Cvisitor.js >>", result);
    res.send("삭제 성공!!");
  });
};