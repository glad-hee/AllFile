// [before]
// const Visitor = require("../model/Visitor");
// [after]
// models 변수 값 = models/index.js 에서 export한 db객체
const models = require("../models"); // models/index.js 내보내는 값
console.log(models);

// (1) GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// (2) GET /visitor => localhost:PORT/visitor
exports.getVisitors = async (req, res) => {
  // [before]
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after] mysql db 연결!
  // Visitor.getVisitors((result) => {
  //   console.log("Cvisitor.js >>", result);
  //   // => [ {}, {}, {} ]
  //   res.render("visitor", { data: result });
  // });

  // [after2] sequelize
  // ver1. promise then
  // models.Visitor.findAll().then((result) => {
  //   console.log("findAll >> ", result);
  //   res.render("visitor", { data: result });
  // });

  // ver2. async await
  const result = await models.Visitor.findAll();
  console.log("findAll >>", result); // [ {} {} {} ]
  res.render("visitor", { data: result });
};

// (3) POST /visitor/write
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body);
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js >>", result); // model 코드에서 데이터를 추가한 결과인 rows.insertId
  //   res.send({ id: result, name: req.body.name, comment: req.body.comment });
  // });
  // => INSERT INTO visitor (name, comment) VALUES('${data.name}','${data.comment}')

  // [after]
  const result = await models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  });
  console.log("create >>", result);
  res.send(result);
};

// (4) DELETE /visitor/delete
exports.deleteVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // axios data {id : n}
  // Visitor.deleteVisitor(req.body.id, (result) => {
  //   console.log("Cvisitor.js >>", result);
  //   res.send("삭제 성공!!");
  // });
  // DELETE FROM visitor WHERE id = '${id}'
  // [after]
  const result = await models.Visitor.destroy({
    where: { id: req.body.id },
  });

  console.log(result);
  res.end();
};

exports.getVisitor = (req, res) => {
  // [before]
  // console.log(req.query); // { id : n }
  // Visitor.getVisitor(req.query.id, (result) => {
  //   console.log(result); // model callback 에서 넘겨주는 rows[0]
  //   res.send(result);
  // });

  // [after]
  models.Visitor.findOne({
    where: { id: req.query.id },
  }).then((result) => {
    console.log(result);
    // visitor {
    //   dataValues: { id: 21, name: 'ㅓㅓ', comment: 'ㅓㅓ' },
    //   _previousDataValues: { id: 21, name: 'ㅓㅓ', comment: 'ㅓㅓ' },
    //   uniqno: 1,
    //   _changed: Set(0) {},
    //   _options: {
    //     isNewRecord: false,
    //     _schema: null,
    //     _schemaDelimiter: '',
    //     raw: true,
    //     attributes: [ 'id', 'name', 'comment' ]
    //   },
    //   isNewRecord: false
    // }
    res.send(result);
  });
};

exports.patchVisitor = (req, res) => {
  // [before]
  // console.log(req.body);
  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정 성공!");
  // });

  // [after]
  //  update(x,y)
  // x => SET
  // y => WHERE
  models.Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((result) => {
    console.log("update >>", result);
    res.send("수정 성공!");
  });
};
